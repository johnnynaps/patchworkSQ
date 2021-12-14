module.exports = app => {
  const accounts = require("../controllers/accounts.controller.js");

  var router = require("express").Router();

  // Create a new account
  router.post("/", accounts.create);

  // Retrieve a single account with id
  router.get("/:id", accounts.findOne);

  // Update an account with id
  router.put("/:id", accounts.update);

  // Delete an account with id
  router.delete("/:id", accounts.delete);

  app.use('/api/accounts', router);
};