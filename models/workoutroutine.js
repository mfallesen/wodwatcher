const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutRoutineSchema = new Schema ({
    name:{
        type: String,
        unique: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
})

const workoutRoutine = mongoose.model("Workout", workoutRoutineSchema)

module.exports = Exercise;