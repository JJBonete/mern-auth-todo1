import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
  authButton: {},
});

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignOut = () => {
    //signOut the user
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              Todo List App
            </Link>
          </Typography>
          <Typography variant="subtitle2" className={classes.root}>
            Logged in as Jobert
          </Typography>

          <Button color="inherit" onClick={() => handleSignOut()}>
            SignOut
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signin">
              SignIn
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signup">
              SignUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
