const mongoose = require("mongoose");
const db = require("../models")

module.exports = app => {
    app.post("/User", ({ body }, res) => {
        db.User.create(body)
            .then(result => {
                res.json(result)
                console.log(result)
            })
            .catch(({ message }) => {
                res.send(message)
                console.log(message)
            })
    })
}