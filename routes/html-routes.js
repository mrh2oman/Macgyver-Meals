// ***** DEPENDENCIES *****
var path = require("path");

// ***** ROUTING *****
module.exports = function(app){

	// -- Home --
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}