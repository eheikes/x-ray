var read = require('fs').readFileSync
var html = read(__dirname + '/selector.html')
var Xray = require('..')
var x = Xray()

x(html, 'h2')(function(err, title) {
  console.log(title);
})
