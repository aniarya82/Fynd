var exports = module.exports = {}
var fs = require('fs')

exports.readData = function(filename) {
	return JSON.parse(fs.readFileSync(filename).toString())
}