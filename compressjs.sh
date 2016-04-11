#!/bin/bash

# Constants
SERVICE_URL=http://closure-compiler.appspot.com/compile
#NEWFILE="c`date +"%d%m%y"`.js"
#this specifies last arg as destination 
declare -a component=("react/components/Article/Article.js" "react/components/Article/ArticleGroup.js" "react/components/Article/Image.js" "react/components/Article/Paragraph.js" "react/components/Article/Video.js" "react/components/Badge.js" "react/components/Badge.js" "react/components/Footer.js" "react/components/Headline.js" "react/components/Navbar/Navbar.js" "react/components/Navbar/Dropdown.js" "react/components/Navbar/DropdownMenu.js" "react/components/Navbar/Menu.js" "react/components/Navbar/NavbarForm.js" "react/components/Navbar/NavsGroup.js" "react/components/Pagination.js" "react/components/SidePanel/SidePanel.js" "react/components/SidePanel/SidePanelHeader.js" "react/components/SidePanel/SidePanelFooter.js" "react/components/Slider/Slider.js" "react/components/Slider/SliderGroup.js" "react/components/SmallArticle/SmallArticle.js" "react/components/SmallArticle/SmallArticleGroup.js" "react/components/TagPanel.js" "react/components/Title.js")
declare -a index=("react/index/Index.js" "react/index/IndexBody.js")
declare -a konten=("react/konten/Konten.js" "react/konten/KontenBody.js")
for NEWFILE in $*; do :; done

# Check if files to compile are provided
#if [ $* -eq 0 ]
#then
#	echo 'Nothing to compile. Specify input files as command arguments. E.g.'
#	echo './compressjs file1.js file2.js file3.js'
#	exit
#fi

# Itearate through all files
process_files=false
if [[ $1 == 1 ]]; then declare -a data="${component[@]}" 
fi
if [[ $1 == 2 ]]; then declare -a data="${index[@]}" 
fi 
if [[ $1 == 3 ]]; then declare -a data="${konten[@]}" 
fi
for f in ${data[@]}
do
        if [ ${f} != $NEWFILE ]
        then
                if [ -r ${f} ]
                then
                        code="${code} --data-urlencode js_code@${f}"
                        # Test whether at least one of the input file is newer than the output file
                        if [ ${f} -nt $NEWFILE ]; then
						    process_files=true
						fi
                else
                        echo "File ${f} does not exist or is not readable. Skipped."
                fi
        fi
done
#
#if !${process_files}
#then
#	echo "Already up to date."
#	exit 0
#fi

# Send request
curl \
--url ${SERVICE_URL} \
--header 'Content-type: application/x-www-form-urlencoded' \
${code} \
--data output_format=json \
--data output_info=compiled_code \
--data output_info=statistics \
--data output_info=errors \
--data compilation_level=SIMPLE_OPTIMIZATIONS |

python -c '
import json, sys
data = json.load(sys.stdin)

if "errors" in data:
	print "### COMPILATION FAILED WITH ERRORS"
	for err in data["errors"]:
		file = sys.argv[int(err["file"].replace("Input_", "")) + 1]
		print "File: %s, %d:%d" % (file, err["lineno"], err["charno"])
		print "Error: %s" % err["error"]
		print "Line: %s" % err["line"]
		
	print "\nBuild failed.\n"
	
else:
	print "### COMPILATION COMPLETED"
	print "Original size: %db, gziped: %db" % (data["statistics"]["originalSize"], data["statistics"]["originalGzipSize"])
	print "Compressed size: %db, gziped: %db" % (data["statistics"]["compressedSize"], data["statistics"]["compressedGzipSize"])
	print "Compression rate: %.2f" % (float(data["statistics"]["compressedSize"]) / int(data["statistics"]["originalSize"]))

	filename = "'${NEWFILE}'"
	with open(filename, "w") as f:
		f.write(data["compiledCode"])

	print "\nBuild file %s created.\n" % filename
' $@