#!/bin/bash
./node_modules/mocha-phantomjs/bin/mocha-phantomjs -p ./node_modules/.bin/phantomjs -R spec "http://localhost:3000/test/analiseUrlTest.js.html";
