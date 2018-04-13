var getTopThree = require('./utils/getTopThree.js')
var sortPopularity = require('./utils/sortPopularity.js')
var dataCleanUp = require('./utils/dataCleanUp.js')
var readData = require('./utils/readData.js')

var data = readData('data/imdb.json')
var cleaned = dataCleanUp(data)
var action_list = cleaned["Action"]
var desc_order = sortPopularity(action_list, "desc")
console.log(getTopThree(desc_order))