var exports = module.exports = {}
var _ = require("lodash")

exports.sortPopularity = function(movies_list, order) {
	return _.orderBy(movies_list, "popu", order)
}