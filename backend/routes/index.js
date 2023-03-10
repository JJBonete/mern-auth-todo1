const Todo = require("../models/todo.model");
const express = require("express");
const Joi = require("joi");
const { date } = require("joi");
// const auth = require("../middleware/auth");

const router = express.Router();

// ======================================================

// GET
// THIS GET IS FILTERING ISCOMPLETE AND DATE IS IN DECENDING ORDER, AND SELECTING ONLY THE NAME
// NOTE TO SELF: AFTER FINISHING REDUX, ADD auth, before async func in all endpoints

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ date: -1 });

    res.json(todos);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//GET
// router.get("/", async (req, res) => {
//   try {
//     const todo = await Todo.find().sort({ date: -1 }); // date will sort by decending
//     res.send(todo);
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.log(error.message);
//   }
// });

// ======================================================
//POST
router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({ name, author, isComplete, date, uid });

  // todo = await todo.save();
  // res.send(todo);

  try {
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

// ======================================================

//DELETEONE
// router.delete("/", async (req, res) => {
//   const todo = await Todo.deleteOne({ isComplete: false });
//   res.send(todo);
// });

//DELETEMANY
// router.delete("/", async (req, res) => {
//   const todo = await Todo.deleteMany({ isComplete: false });
//   res.send(todo);
// });

//DELETE BY ID
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) return res.status(404).send("Todo not found...");
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    res.send(todo);
  } catch (error) {
    res.send(500).send(error.message);
    console.log(error.message);
  }
});

// ======================================================
//PUT
router.put("/:id", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send("Todo not found...");

    const { name, author, isComplete, date } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        name,
        author,
        isComplete,
        date,
      },
      { new: true }
    );
    console.log(updatedTodo);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

// ======================================================
//PATCH
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).send("Todo not found...");

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        isComplete: !todo.isComplete,
      },
      { new: true }
    );

    res.send(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
