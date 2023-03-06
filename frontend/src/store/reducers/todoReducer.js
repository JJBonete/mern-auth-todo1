const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      console.log(action);
      return [action.todo.data, ...state];
    default:
      return state;
  }
};

export default todoReducer;
