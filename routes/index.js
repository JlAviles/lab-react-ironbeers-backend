const express = require('express');
const router = express.Router();
const Task = require("../models/Task")

router.get('/tasks', (req, res, next) => {
  Task
    .find()
    .select({
      "__v": false,
      "updatedAt": false
    })
    .then(allTheTasks => res.json(allTheTasks))
});


router.post('/task', (req, res, next) => {
  Task.create({
    "taskStr": req.body.taskStr,
    "done": false
  }).then(() => {
    Task
      .find()
      .select({
        "__v": false,
        "updatedAt": false
      })
      .then(allTheTasks => res.json(allTheTasks))
  })
});

module.exports = router;
