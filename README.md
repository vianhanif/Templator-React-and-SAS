# Templator-React-and-SASS
Example of using React to seperate page component into a single template class with configurable colorings. Well, this is my first React project. I'm using Scout and [autobabel](https://github.com/anIddan/autobabel) in Brackets editor.

## Features :
- set menus, navbar position and articles right from json (`index.json` and `konten.json`)
- set theme colorings with `config.scss`

### Note :
I'm using `compressjs.sh` to bundle all component into three files (`built.min.js`, `index.min.js`, `konten.min.js`).
To use them :
- run `./compressjs.sh 1 js/built.min.js` to bundle the components
- run `./compressjs.sh 2 js/index.min.js` for index page
- run `./compressjs.sh 3 js/konten.min.js` for konten page

To change theme colors, in `config.scss`:
add your own color set like this example
```
$theme-blue: ( #38aff0, #fcbf5d, #ffffff, #383838, rgba(98, 98, 98, 0.26));
$badge-rainbow: ( #2d99d4, #F9690E, #ae1dc9, #1fc17d, #e85143, #4a4f53, #F4D03F, #1d689f, #0e761a, #9b9b15, #777e86);
```
then apply them as `$theme` and `$badge` like below
```
$theme: $theme-blue;
$badge: $badge-rainbow;
```

> Sorry for the hassle, should have used webpack... I'll try it in any other time:grin:
