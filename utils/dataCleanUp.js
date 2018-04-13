module.exports = function(data) {
	var new_data = {}
	data.forEach(function(elem) {
		var genre = elem["genre"]
		var details = {
			"name": elem["name"],
			"dirc": elem["director"],
			"popu": elem["99popularity"],
			"imdb": elem["imdb_score"]
		}
		genre.forEach(function(gnr) {
			if (new_data[gnr.trim()] == undefined) {
				new_data[gnr.trim()] = []
			}
			new_data[gnr.trim()].push(details)
		})
	})
	return new_data
}