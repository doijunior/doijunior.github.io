var ejs = require('ejs');
var fs = require('fs');

var template = fs.readFileSync('./components/template.ejs', 'utf8');
var social = fs.readFileSync('./components/social.ejs', 'utf8');

var menu = fs.readFileSync('./components/menu.ejs', 'utf8');

var templateCompiled = ejs.render(template,
  {
    social: social,
    menu: menu
  });

fs.writeFileSync('index2.html', templateCompiled);
