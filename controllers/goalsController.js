const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log('req.params.user', req.params.user)
        db.Goal
            .find({user: req.params.user})
            .then(dbModel => {
                console.log('dbModel', dbModel)
                return res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Goal
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Goal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Goal
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Goal
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
//dafdsa