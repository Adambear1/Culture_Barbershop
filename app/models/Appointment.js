const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    Appointment: String,
    Time: String
});

const Note = mongoose.model("Appointment", AppointmentSchema);

module.exports = Note;
