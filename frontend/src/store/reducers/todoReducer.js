import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      toast.success("The todo was added. . . ", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(action);
      return [action.todo.data, ...state];
    case "UPDATE_TODO":
      toast.success("The todo was updated. . . ", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) => (todo._id === action.todo.data._id ? action.todo.data : todo));
    default:
      return state;
  }
};

export default todoReducer;
