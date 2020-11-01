const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseName: String,
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
  distance: Number
});

const Exercise  = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;