module.exports = app => {
  const games = require("../controllers/games.controller.js");

  var router = require("express").Router();

  // Create a new Games
  router.post("/", games.create);

  // Retrieve all Games
  router.get("/", games.findAll);

  // Retrieve a single Games with id
  router.get("/:id", games.findOne);

  // Update a Games with id
  router.put("/:id", games.update);

  // Delete a Games with id
  router.delete("/:id", games.delete);

  app.use('/api/games', router);
};