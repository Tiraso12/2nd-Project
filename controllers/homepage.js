const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/hol', (req, res) => {
    res.render('highOrLow', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/rps', (req, res) => {
    res.render('rockPaperScissors', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/', (req, res) => {
    console.log(req.session);

    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;