#!/usr/bin/phantomjs
/* docshot.js, part of docshot */

var system = require('system'),
    url = system.args[1],
    output = system.args[2],
    page = require('webpage').create();

if (system.args.length === 2) {
  console.log("Sadly, I need a thing to fetch and what to write it to.");
  phantom.exit(1);
}

page.viewportSize = {
  width: 1366,
  height: 768
};

console.log('Loading ' + url);
page.open(url, function (status) {
  if ( status != "success" ) {
    console.log("Failure loading page.");
    phantom.exit(2);
  }
  console.log(status + " loading page.");
  window.setTimeout(function () {
    page.render(output);
    phantom.exit();
  }, 200);
});

// vim: tabstop=2 expandtab shiftwidth=2 softtabstop=2
