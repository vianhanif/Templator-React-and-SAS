//run bash file
/* untuk bundling components */
./compressjs.sh react/components/Article/Article.js react/components/Article/ArticleGroup.js react/components/Article/Image.js react/components/Article/Paragraph.js react/components/Article/Video.js react/components/Navbar/Dropdown.js react/components/Navbar/DropdownMenu.js react/components/Navbar/Menu.js react/components/Navbar/Navbar.js react/components/Navbar/NavbarForm.js react/components/Navbar/Navs.js react/components/SidePanel/SidePanel.js react/components/SidePanel/SidePanelFooter.js react/components/SidePanel/SidePanelHeader.js react/components/Slider/Slider.js react/components/Slider/SliderGroup.js react/components/SmallArticle/SmallArticle.js react/components/SmallArticle/SmallArticleGroup.js react/components/Badge.js react/components/Footer.js react/components/Headline.js react/components/Pagination.js react/components/TagPanel.js react/components/Title.js js/built.min.js

/* untuk bundling halaman index.js */
./compressjs.sh react/index/Index.js react/index/IndexBody.js js/index.min.js

/* untuk bundling halaman konten */
./compressjs.sh react/konten/Konten.js react/konten/KontenBody.js js/konten.min.js
