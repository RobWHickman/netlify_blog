// scrapes a given url (for eloratings.net)

// Create a webpage object
var page = require('webpage').create(),
  system = require('system'),
  country;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js [some URL]');
  phantom.exit();
}

country= system.args[1];

// Include the File System module for writing to files
var fs = require('fs');

// Specify source and path to output file
var path = 'elopage.html'

page.open(country, function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});