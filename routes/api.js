const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/wod", {
    useNewUrlParser:true,
    useFindAndModify: false
});


// get all current workout data
router.get("/api/totalwork", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err)
    });
});

// add workout

router.post("/api/newworkout", (req, res) => {
    db.Workout.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err)
    });
});

module.exports = router;