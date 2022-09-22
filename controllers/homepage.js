const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => {
      const totalWins = dbUserData.map((user) => {
        return {
          username: user.username,
          totalWins: user.winsHoT + user.winsRPS + user.winsHoL,
        };
      });
      console.log(totalWins);
      res.render("homepage", {
        totalWins,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/headsOrTails", (req, res) => {
  console.log(req.session);

  res.render("headsOrTails", {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

router.get("/rockPaperScissors", (req, res) => {
  console.log(req.session);

  res.render("rockPaperScissors", {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

router.get("/highOrLow", (req, res) => {
  console.log(req.session);
  console.log(req.session.loggedIn);
  res.render("highOrLow", {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

router.get("/login", (req, res) => {
  console.log(req.session);

  res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;
