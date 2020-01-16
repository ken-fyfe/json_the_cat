// breedFetcher.js
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const catBreed = breedName.substring(0,4);
  const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed}`;
  request(URL, (error, response, body) => {
    if (error) {
      callback(error.code, null);
    } else {
      if (body === '[]') {
        callback('Cat breed not found', null);
      } else {
        const data = JSON.parse(body);
        const description = data[0].breeds[0].description;
        callback(null, description.trim());
      }
    }
  });
};

module.exports = {fetchBreedDescription};