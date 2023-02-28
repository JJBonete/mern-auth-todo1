import React from "react";

import { Send } from "@material-ui/icons";
import { TextField, Button, makeStyles } from "@material-ui/core";

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

  return (
    <>
      <form noValidate autoComplete="off" className={classes.formStyle}>
        <TextField id="enter-todo" variant="outlined" label="Enter Todo" autoFocus fullWidth />
        <Button className={classes.submitButton} color="primary" variant="contained" type="submit">
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
