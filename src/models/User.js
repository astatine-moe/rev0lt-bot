const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    identifier: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
    },
    avatar: {
        type: String,
    },
    points: {
        type: Number,
        default: 0,
        min: 0,
    },
    total_points: {
        type: Number,
        default: 0,
        min: 0,
    },
    role: {
        type: String,
        default: "user",
    },
    evidence: [{ type: String }], //array of message ids
});

module.exports = mongoose.model("User", schema);
