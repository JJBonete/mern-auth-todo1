import React from "react";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  grayStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo }) => {
  const classes = useStyles();
  const handleUpdateClick = () => {};
  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          {todo.isComplete ? (
            <Typography variant="subtitle1" className={classes.checked}>
              {todo.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{todo.name}</Typography>
          )}
          <Typography className={classes.grayStyle} variant="body2">
            Author: Jobert
          </Typography>
          <Typography className={classes.grayStyle} variant="body2">
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-aria-label="outline primary button group">
            {todo.isComplete ? (
              <Button>
                <CheckCircle color="action" className={classes.isComplete} />
              </Button>
            ) : (
              <Button>
                <CheckCircle color="action" />
              </Button>
            )}

            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Todo;
