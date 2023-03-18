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
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(userData));
    setuserData({
      email: "",
      password: "",
    });
  };

  if (auth._id)
    return (
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    );

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">SignIn</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          value={userData.email}
          onChange={(event) =>
            setuserData({ ...userData, email: event.target.value })
          }
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          value={userData.password}
          onChange={(event) =>
            setuserData({ ...userData, password: event.target.value })
          }
        />

        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
