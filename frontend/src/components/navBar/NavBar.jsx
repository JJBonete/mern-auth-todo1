import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(state);

  const handleSignOut = () => {
    //signOut the user
    dispatch(signOut());

    navigate("/signIn");
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
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className={classes.root}>
                Logged in as {auth.name}
              </Typography>

              <Button color="inherit" onClick={() => handleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signIn">
                  SignIn
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signUp">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
