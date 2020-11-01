const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: "Enter an Exercise name"
    },
    exerciseType: {
        type: String,
        required: "You must enter an exercise type"
    },
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;