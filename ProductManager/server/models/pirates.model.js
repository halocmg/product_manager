const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    pirateName: { type: String, required: [true, "{PATH} must be present"], minlength: [2, "{PATH} must be at least 2 characters long"] },
    imgUrl: { type: String, required: [true, "{PATH} must be present"], minlength: [2, "{PATH} must be at least 2 characters long"] },
    chests: { type: Number, required: [true, "{PATH} must be present"] },
    phrase: { type: String, required: [true, "{PATH} must be present"], minlength: [2, "{PATH} must be at least 2 characters long"] },
    position: { type: String, required: [true, "{PATH} must be present"], minlength: [2, "{PATH} must be at least 2 characters long"] },
    leg: { type: Boolean, required: [true, "{PATH} must be present"] },
    eye: { type: Boolean, required: [true, "{PATH} must be present"] },
    hand: { type: Boolean, required: [true, "{PATH} must be present"] }
}, { timestamps: true })
module.exports.pirate = mongoose.model("Pirate", PirateSchema)