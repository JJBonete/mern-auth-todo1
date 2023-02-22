const Todo = require("../models/todo.model");
const express = require("express");
const Joi = require("joi");
// const auth = require("../middleware/auth");

const router = express.Router();

//GET
//THIS GET IS FILTERING ISCOMPLETE AND DATE IS IN DECENDING ORDER, AND SELECTING ONLY THE NAME

// router.get("/", async (req, res) => {
//   const todos = await Todo.find({ isComplete: true }).sort({ date: -1 }).select({ name: 1 });
//   res.json(todos);
// });

//GET
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find().sort({ date: -1 }); // date will sort by decending
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//POST
router.post("/", async (req, res) => {
  // transfer schema validation in middleware
  // joi objects should be in models

  const schema = Joi.object({
    //THIS SCHEMA WILL BE USED FOR VALIDATION
    name: Joi.string().min(3).max(30).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  router.delete("/", async (req, res) => {
    const todo = await Todo.deleteOne({ isComplete: false });
    res.send(todo);
  });

  const validate = schema.validate(req.body);
  if (validate.error) return res.status(400).send(error.details[0].message);

  const { value, error } = schema.validate(req.body);
  console.log(value, error);

  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  });

  // OPTION 1
  try {
    todo = await todo.save(); //ASYNC
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }

  // OPTION 2
  //   todo
  //     .save()
  //     .then((todo) => {
  //       res.send(todo);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  // });
});

module.exports = router;
