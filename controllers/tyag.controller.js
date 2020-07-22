const Tyag = require("../models/tyag.model.js")

// Create and Save a new Tyag
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tyag
    const tyag = new Tyag({
        tyagname: req.body.tyagname,
        createdate: req.body.createdate
    });

    // Save Tyag in the database
    Tyag.create(tyag, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tyag."
            })
        else res.send(data);
    })
}

// Retrieve all Tyag from the database.
exports.getAll = (req, res) => {

    Tyag.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tyag."
            });
        else res.send(data);
    })
}

// Retrieve current date Tyag from the database.
exports.findByDate = (req, res) => {

    Tyag.findByDate((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tyag."
            });
        else res.send(data);
    })
}
