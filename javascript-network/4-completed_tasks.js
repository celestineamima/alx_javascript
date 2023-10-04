#!/usr/bin/node

const req = require('request');

const url = process.argv[2];

req.get(url, {json: true },function(error, body, response) {
    if (error) {
        console.log(error);
        return;
        