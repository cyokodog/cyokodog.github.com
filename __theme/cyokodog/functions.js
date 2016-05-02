var hb = require('gulp-hb');
var fs = require('fs-extra');
module.exports = function(){




var list = fs.readdirSync(__dirname + '/partials');
list.forEach( function( fileName ){


if( /^_.+/.test(fileName) ){
  var tagName = fileName.replace(/^_/,'').replace(/\.hbs$/,'')

  console.log(tagName)
  hb.handlebars.registerPartial(tagName, fs.readFileSync(__dirname + '/partials/' + fileName, 'utf8'));
}




});






// for (var i=0; i<list.length; i++){
//   console.log(list[i]);
// }




  registerPartial( 'articlelist', '_articlelist.hbs' );
  registerPartial( 'pageNav', '_pagenav.hbs' );

  function registerPartial( tagName, filePath ){
    // hb.handlebars.registerPartial(tagName, fs.readFileSync(__dirname + '/partials/' + filePath, 'utf8'));
  }

};
