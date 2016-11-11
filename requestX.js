//the point of this one here is to write an
//http client and use REQUEST to download the
//image at this https://sytantris.github.io/http-examples/future.jpg
//address
var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
         throw err;
       })
  .on('response', function (response) {
         console.log('Response Status Code: %s, Content type: %s ', response.statusMessage, response.headers['content-type']);
       })
  .pipe(fs.createWriteStream('./future.jpg'));