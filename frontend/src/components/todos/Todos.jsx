import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";
const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (auth._id)
    return (
      <Routes>
        <Route path="/signIn" element={<signIn />} />
      </Routes>
    );
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};

export default Todos;
