
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friends = require("../data/friends");
// ROUTING
// ===============================================================================

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
     res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newSurvey = req.body;
  
    new.routeSurvey = newSurvey.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newSurvey);
  
    friends.push(newSurvey);
  
    res.json(newSurvey);
  });
}