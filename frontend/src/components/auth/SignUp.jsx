import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signUp } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {

  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(signUp(user))
    setUser({
      name: "",
      email: "",
      password: ""
    })

  }

  return (
    <>
      <form noValidate autoComplete="off" className={classes.formStyle} onSubmit= {handleSubmit}>
        <Typography variant="h5">SignUp</Typography>
        <TextField
          className={classes.spacing}
          id="enter-name"
          label="Enter Name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange = {(event) => setUser({...user, name: event.target.value})}
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange = {(event) => setUser({...user, email: event.target.value})}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange = {(event) => setUser({...user, password: event.target.value})}
        />

        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
