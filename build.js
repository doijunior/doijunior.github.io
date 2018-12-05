var ejs = require('ejs');
var fs = require('fs');

var template = fs.readFileSync('./components/template.ejs', 'utf8');
var social = fs.readFileSync('./components/social.ejs', 'utf8');
var map = fs.readFileSync('./components/map.ejs', 'utf8');
var menu = fs.readFileSync('./components/menu.ejs', 'utf8');

var templateCompiled = ejs.render(template,
  {
    map: map,
    menu: menu,
    social: social
  });

fs.writeFileSync('index2.html', templateCompiled);
