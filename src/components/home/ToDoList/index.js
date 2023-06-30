import ToDoContainer from "./ToDoContainer";
import { boxStyle } from "./styled";

const ToDoList = (props) => {
  const todos = props.todos;
  const handleCompletionOnclick = (currentId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === currentId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    props.onUpdateTodos(updatedTodos);
    console.log(updatedTodos);
  };
  const handleRemoveOnclick = (removeId) => {
    props.onRemoveTodo(removeId);
  };
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div style={boxStyle}>
          {todos.map((todo) =>
            todo.isDone === false ? (
              <ToDoContainer
                key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.body}
                handleCompletionOnclick={handleCompletionOnclick}
                handleRemoveOnclick={handleRemoveOnclick}
              />
            ) : null
          )}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <div style={boxStyle}>
          {todos.map((todo) =>
            todo.isDone !== false ? (
              <ToDoContainer
                key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.body}
                handleCompletionOnclick={handleCompletionOnclick}
                handleRemoveOnclick={handleRemoveOnclick}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
