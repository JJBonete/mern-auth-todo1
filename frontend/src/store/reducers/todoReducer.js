const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      console.log(action);
      return [action.todo.data, ...state];
    case "UPDATE_TODO":
      return state.map((todo) => {
        return todo._id === action.todo.data._id ? action.todo.data : todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
