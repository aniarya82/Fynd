var test = require('tape')
var readData = require('../utils/readData.js')
var dataCleanUp = require('../utils/dataCleanUp.js')
var getTopThree = require('../utils/getTopThree.js')
var sortPopularity = require('../utils/sortPopularity.js')

test('getTopThree test', function (t) {
    t.plan(1);
    var three = ["first","second","third","fourth","fifth"]
    var sliced = getTopThree(three)
    t.equal("third",sliced[2])
});

test('sortPopularity test', function(t) {
	t.plan(2);
	var tmp = [{"name":"first","popu":11},{"name":"second","popu":21},{"name":"third","popu":31}]
	var sorted = sortPopularity(tmp, "desc")
	t.equal("first",sorted[2]["name"])
	t.equal(11,sorted[2]["popu"])
});

test('readData test', function(t) {
	t.plan(4);
	var tmp = readData('./data/imdb.json')
	t.equal("The Wizard of Oz",tmp[0]["name"])
	t.equal("Victor Fleming",tmp[0]["director"])
	t.equal(8.3,tmp[0]["imdb_score"])
	t.equal(4,tmp[0]["genre"].length)
})

test('dataCleanUp test', function(t) {
	t.plan(3);
	var tmp = [{"name":"first","director":"dir","99popularity":88,"imdb_score":8.8,"genre":["Action","Musical","Comedy"]}]
	var new_data = dataCleanUp(tmp)
	t.equal("first",new_data["Action"][0]["name"])
	t.equal("dir",new_data["Action"][0]["dirc"])
	t.equal(88,new_data["Action"][0]["popu"])
});