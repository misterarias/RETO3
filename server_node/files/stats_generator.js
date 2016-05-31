#!/usr/bin/env nodejs

var os          = require('os');
var mysql       = require('mysql');
var readline    = require("readline");
var fs          = require('fs')

var pool = mysql.createPool({
		connectionLimit : 10,
		host     : 'reto1db',
		//host     : '172.17.0.2',
		user     : 'root',
		password : 'passwd', 
		database : 'reto1',
});

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

function _comeon(line, csv) {
	pool.getConnection(function(err, connection) {
		if (err) {
			console.log(err);
			if (connection !== undefined) {
				connection.release();
			}
			return;
		}
		connection.query("select count(*) as kount,  avg(insert_time - creation_time) as average from reto1 where insert_time <= from_unixtime(?) && insert_time > from_unixtime(?)", [parseInt(csv[0]), parseInt(csv[0]) - 60], function(err, result) {
			if (err) {
				console.log(err);
				if (connection !== undefined) {
					connection.release();
				}
				return;
			}
			connection.release();
			console.log(line + ',' + result[0].kount + ',' + (result[0].average ? result[0].average : 0));
		});

		connection.on('error', function(err) {
			console.log(err);
		});

	});
}

function comeon(line, csv) {
	var now = Date.now();
	var timestamp = parseFloat(csv[0]) * 1000;
	if ((timestamp - now) > 0) {
		setTimeout(function() {
			comeon(line, csv);
		}, timestamp - now);
	} else {
		_comeon(line, csv);
	}
}

rl.on('line', function(line) {
	var csv  = line.split(",");
	if (csv.length == 12) {
	//if (csv.length == 13) {
		var ary = csv[0].split('.');
		if (ary.length == 2) {
			comeon(line, csv);
		};
	}
});

