// action value
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE";
const COMPLETION_TODO = "todos/COMPLETION_TODO";

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
  inputData: { title: "", body: "" },
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
  ],
};

const todosData = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, inputData: action.input };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    default:
      return state;
  }
};

export default todosData;
