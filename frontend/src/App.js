import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" exact element={<Todos />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
