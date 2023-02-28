import React from "react";

import { Typography } from "@material-ui/core";
import Todo from "./Todo.jsx";

const ListTodos = () => {
  return (
    <>
      <div>
        <Typography variant="h5">theTodo s</Typography>
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default ListTodos;
