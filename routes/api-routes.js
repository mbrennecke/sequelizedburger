
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(dbBurger) {
		var hbsObject = {
		burger_name: dbBurger
		};
		console.log(hbsObject);
    res.render("index", hbsObject);
	});
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
	 db.Burger.create({
		 burger_name: req.body.name,
		 devoured: false
	  })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers/:id", function(req, res) {
	db.Burger.update(
	{
		devoured: req.body.devoured
	},{
        where: {
          id: req.body.id
        }
      }).then(function(dbBurger) {
        res.json(dbBurger);
      });
  });
};
