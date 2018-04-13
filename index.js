var getList = require('./utils/getTopThree.js')
var sortList = require('./utils/sortPopularity.js')
var cleanUp = require('./utils/dataCleanUp.js')
var readData = require('./utils/readData.js')

var data = readData.readData('data/imdb.json')
var cleaned = cleanUp.dataCleanUp(data)
var action_list = cleaned["Action"]
var desc_order = sortList.sortPopularity(action_list, "desc")
console.log(getList.getTopThree(desc_order))