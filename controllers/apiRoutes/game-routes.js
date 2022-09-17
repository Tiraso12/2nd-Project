const router = require('express').Router();
const Game = require('../../models/Game');

router.get('/', (req, res) => {
    Game.findAll({
        attributes: [
            'id',
            'name',
            'wins',
            'plays'
        ],
    })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;