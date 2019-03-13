const friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.get("/api/addjon", function(req, res) {
    if (friendsData.length < 2) {
		friendsData.push({name:"Jon"});
		res.json(true);
    } else {
		res.json(false);
	}
  });

/*
  app.post("/api/friends", function(req, res) {
    if (friendsData.length < 2) {
		friendsData.push(req.body);
		res.json(true);
    } else {
		res.json(false);
	}
  });
*/

};
