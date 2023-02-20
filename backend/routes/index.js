const { Todo } = require("../models");
const express = require("express");
const joi = require("joi");
const Joi = require("joi");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    //THIS SCHEMA WILL BE USED FOR VALIDATION
    name: Joi.string().min(3).max(30).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  if (error) return res.status(400).send(error.details[0].message);

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
