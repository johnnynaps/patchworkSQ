const db = require("../models");
const Game = db.games;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const game = {
        title: req.body.title,
        urlHome: req.body.urlHome,
        urlSupport: req.body.urlSupport,
        urlNews: req.body.urlNews,
        urlServer: req.body.urlServer,
        urlTwitter: req.body.urlTwitter,
        serverStatus: req.body.serverStatus,
        developer: req.body.developer,
        currentPatch: req.body.currentPatch
    }

    Game.create(game)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding the game"
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Game.findAll({
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Game.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find game with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving game with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Game.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Game was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update game with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating game with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Game.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Game was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete game with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete game with id=" + id
            });
        });
};