const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutRoutineSchema = new Schema ({
    name:{
        type: String,
        required: "You need a name for this workout"
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    date: {
        type: Date,
        default:Date.now,
        required: true
    }
})

const workoutRoutine = mongoose.model("Workout", workoutRoutineSchema)

module.exports = workoutRoutine;