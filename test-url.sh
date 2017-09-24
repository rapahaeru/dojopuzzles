#!/bin/bash

function killServer {
	kill $NODE_PID
}

trap killServer EXIT

sleep 2

./node_modules/mocha-phantomjs/bin/mocha-phantomjs -p ./node_modules/.bin/phantomjs -R spec "http://localhost:3000/test/analiseUrlTest.js.html";
