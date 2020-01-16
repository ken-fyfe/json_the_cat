// breedFetcher.js
const request = require('request');
let inputCatType = process.argv[2].substring(0,4);

const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${inputCatType}`;
request(URL, (error, response, body) => {
  if (error) {
    console.log("Fetching cancelled due to error: " + error.code);
  } else {
    if (body === '[]') {
      console.log('Cat breed not found');
    } else {
      const data = JSON.parse(body);
      const description = data[0].breeds[0].description;
      console.log(description);
    }
  }
});