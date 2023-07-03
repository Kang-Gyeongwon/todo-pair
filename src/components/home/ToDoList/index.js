import { useDispatch, useSelector } from "react-redux";
import ToDoContainer from "./ToDoContainer";
import { boxStyle } from "./styled";
import { completionTodo, removeTodo } from "../../../redux/modules/todosData";

const ToDoList = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosData.todos);

  const handleCompletionTodo = (id) => dispatch(completionTodo(id));

  const handleRemoveTodo = (id) => dispatch(removeTodo(id));

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
                onCompletionOnclick={handleCompletionTodo}
                onRemoveOnclick={handleRemoveTodo}
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
                onCompletionOnclick={handleCompletionTodo}
                onRemoveOnclick={handleRemoveTodo}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
