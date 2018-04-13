var _ = require("lodash")

module.exports = function(movies_list, order) {
	return _.orderBy(movies_list, "popu", order)
}