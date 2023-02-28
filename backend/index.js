const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo.model");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");

const index = require("./routes/index");
require("dotenv").config();

// dotenv.config();
console.log(Todo);
const app = express();

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

if (!mongoose.connection.readyState >= 1) {
  mongoose
    .connect(connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connection successful!!"))
    .catch((error) => console.error("Connection failed", error.message));
}

app.listen(port, () => {
  console.log(`Server running on port ${port}.... `);
});

app.use(cors());
app.use(express.json());
app.use("/api/todos", index); //midleware function with parameter
app.use("/api/signUp", signUp);
app.use("/api/signIn", signIn);

app.get("/", (req, res) => {
  res.send("Welcome to the todo app api");
});
