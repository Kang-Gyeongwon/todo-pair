// action value
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE";
const COMPLETION_TODO = "todos/REMOVE";

// action creator
export const changeInput = (input) => {
  return {
    type: CHANGE_INPUT,
    input,
  };
};
export const AddTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      title: todo.title,
      body: todo.body,
      isDone: false,
    },
  };
};


// 초기상태값
const initialState = {
  todos: [
    {
      id: 0,
      title: "",
      body: "",
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos,
      };
    default:
      return state;
  }
};

export default todos;
