import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from "./store/actions/authActions";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Container maxWidth="md">
          <NavBar />
          <Container maxWidth="sm" className={classes.contentStyle}>
            <Routes>
              <Route path="/signin/*" element={<SignIn />} />
              <Route path="/signup/*" element={<SignUp />} />
              <Route path="/" exact element={<Todos />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
