const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: { type: String, required: true },
    user: { type: String, required: true },
    amount: { type: Number, default: 0 },
    goalAmount: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
