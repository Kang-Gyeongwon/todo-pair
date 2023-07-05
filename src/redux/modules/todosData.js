// action value
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE";
const COMPLETION_TODO = "todos/COMPLETION_TODO";

// action creator
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

export const completionTodo = (id) => {
  return {
    type: COMPLETION_TODO,
    id,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

// 초기상태값
const initialState = {
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
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case COMPLETION_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todosData;
