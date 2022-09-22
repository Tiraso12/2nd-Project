const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);

  res.render("headsOrTails", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
