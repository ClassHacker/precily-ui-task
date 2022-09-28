const mongoose = require("mongoose");

let textSchema = new mongoose.Schema({
    _id: Number,
    text: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return value.trim().length > 0;
            },
            message: "Text can not be empty."
        }
    },
}, {timestamps: true});

module.exports = mongoose.model("TextSchema", textSchema);