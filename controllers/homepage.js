const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/headsOrTails", (req, res) => {
  console.log(req.session);

  res.render("headsOrTails", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/rockPaperScissors", (req, res) => {
  console.log(req.session);

  res.render("rockPaperScissors", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/highOrLow", (req, res) => {
  console.log(req.session);

  res.render("highOrLow", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
