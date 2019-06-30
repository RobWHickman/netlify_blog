// scrapes a given url (for eloratings.net)

// create a webpage object
var page = require('webpage').create(),
  system = require('system')

// the url for each country provided as an argument
country= system.args[1];

// include the File System module for writing to files
var fs = require('fs');

// specify source and path to output file
// we'll just overwirte iteratively to a page in the same directory
var path = 'elopage.html'

page.open(country, function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});
