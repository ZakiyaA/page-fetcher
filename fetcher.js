const request = require('request');
const fs = require('fs');
//1st argument URL && 2nd argument local file path
var input = process.argv.slice(2);
console.log(input);

request(input[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


fs.writeFile(input[1], body, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`Downloaded and saved ${input[1].length} bytes to ${input[1]}`);
})
});