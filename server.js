const express = require("express")
const logger = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/culture_barbershop", { useNewUrlParser: false });

const app = express()

app.use(helmet())
app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/html-routes.js")(app)
require("./app/routes/db-routes.js")(app)

app.listen(PORT, () => {
    console.log('APP LISTENING ON PORT' + PORT)
})