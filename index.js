var config = require('./config.js')
var readData = require('./utils/readData.js')
var dataCleanUp = require('./utils/dataCleanUp.js')
var getTopThree = require('./utils/getTopThree.js')
var sortPopularity = require('./utils/sortPopularity.js')

// Reads the data from JSON file
var data = readData('data/'+config.fileName)

// Data is cleaned to form Hash Maps with genre
var cleaned = dataCleanUp(data)

// Retrieve the list of movies of specific genre
var action_list = cleaned[config.genre]

// Sort the list according to the popularity
var desc_order = sortPopularity(action_list, "desc")

// Finally logs the top three movies requested
console.log(getTopThree(desc_order))