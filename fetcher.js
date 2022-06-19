const args = process.argv;
let params = args.slice(2);
const url = params[0];
const path = params[1];

const fs = require('fs');

const request = require('request');
request(url, (error, response, body) => {
  //console.log('error:', error);
  //console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body)
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
  
  });
  
});
