const router = require("express").Router();
const wod = require("../models/workoutroutine.js");
const exercise = require("../models/Exercise.js")

router.get("/api/")