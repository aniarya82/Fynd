var http = require('http')
var fs = require('fs')

var movies = []

function getDetails(movie) {
	this.name = movie["name"]
	this.dir = movie["director"]
}

function checkAction(genre) {
	var res = genre.find(function(elm) {
		return elm.replace(" ","") == "Action"
	})
	if ((res != undefined) && (res.replace(" ","") == "Action")) return true;
	else return false;
}

fs.readFile('imdb.json', 'utf8', function(err, data) {
	if (err) throw err;
	obj = JSON.parse(data)
	for(var i = 0; i < obj.length; i++) {
		if (checkAction(obj[i]["genre"])) {
			movies.push(new getDetails(obj[i]))
		}
	}
})



var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type':'application/json'});
	res.end(JSON.stringify(movies));
});

server.listen(8080);
console.log("Listening to http://localhost:8080");