const db = require("../models");
const Account = db.accounts;
const Op = db.Sequelize.Op;

// Create and Save a new account
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const account = {
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password
    }

    Account.create(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding the account"
            });
        });
};

// Find a single account with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Account.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find account with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving account with id=" + id
            });
        });
};

// Update an account by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Account.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Account was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update account with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating account with id=" + id
            });
        });
};

// Delete an account with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Account.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Account was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete account with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete account with id=" + id
            });
        });
};