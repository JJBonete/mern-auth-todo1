import React from "react";

import Todo from "./Todo";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  todosStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListTodos = () => {
  const classes = useStyles();
  return (
    <>
      <br />
      <div className={classes.todosStyle}>
        <Typography variant="h5">The Todos</Typography>
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default ListTodos;
