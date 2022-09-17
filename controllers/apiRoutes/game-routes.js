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

router.post('/', (req, res) => {
    Game.create({
        name: req.body.name
    })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Game.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbGameData => {
            if(!dbGameData) {
                res.status(404).json({ message: "No game found with this id" });
                return;
            }
            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;