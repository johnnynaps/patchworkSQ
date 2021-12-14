const db = require("../models");
const MasterGame = db.master_games;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const masterGame = {
        game_title: req.body.title,
        game_dev: req.body.developer,
        game_release: req.body.release,
        game_genre: req.body.genre
    }

    MasterGame.create(masterGame)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding the game"
            });
        });
};

exports.update = (req, res) => {
    const game_id = req.params.game_id;

    MasterGame.update(req.body, {
            where: {
                game_id: game_id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Game was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update game with id=${game_id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating game with id=" + game_id
            });
        });
};

exports.delete = (req, res) => {
    const game_id = req.params.game_id;

    MasterGame.destroy({
            where: {
                game_id: game_id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Game was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete game with id=${game_id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete game with id=" + game_id
            });
        });
};

exports.findAll = (req, res) => {
    const game_title = req.query.game_title;
    var condition = game_title ? {
        game_title: {
            [Op.like]: `%${game_title}%`
        }
    } : null;

    MasterGame.findAll({
        where: condition
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving games."
        });
    });
};