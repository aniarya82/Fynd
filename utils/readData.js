var fs = require('fs')

module.exports = function(filename) {
	return JSON.parse(fs.readFileSync(filename).toString())
}