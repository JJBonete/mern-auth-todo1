import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Send } from "@material-ui/icons";
import { TextField, Button, makeStyles } from "@material-ui/core";

import { addTodo } from "../../store/actions/todoActions";
const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddTodo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    console.log(todo);
    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={handleSubmit}>
        <TextField
          id="enter-todo"
          variant="outlined"
          label="Enter Todo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value, date: new Date() })}
        />
        <Button className={classes.submitButton} color="primary" variant="contained" type="submit">
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
