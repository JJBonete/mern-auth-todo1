import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../../store/actions/authActions";
import { Route, Routes } from "react-router-dom";
import Todos from "../todos/Todos";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRaius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const initialValues = { email: "", password: "" };
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }));
  };

  if (auth._id)
    return (
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    );

  return (
    <>
      <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={handleSubmit}>
        <Typography variant="h5">SignIn</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button className={classes.spacing} variant="contained" color="primary" type="submit">
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
