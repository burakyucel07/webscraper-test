const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const urlToScrap = 'https://www.reddit.com';

console.log("Content is being fetched.\n");

axios(urlToScrap)
  .then(response => {
    const rawHtml = response.data;
    const $ = cheerio.load(rawHtml);
    const titles = [];

    $('._eYtD2XCVieq6emjKBH3m', rawHtml).each(function() {
      const title = $(this).text();
      titles.push(title);
    });

    console.log(titles);
	
	console.log("\nContent fetch is finished.\n");
  }).catch(err => console.log(err));
