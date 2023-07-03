const initState = {
  todos: [{ id: Date.now(), title: "리액트 어려웡", body: "어려워XXX3333", isDone: false }],
};

const todos = (state = initState.todos, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
