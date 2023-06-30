import { useState } from "react";
import Header from "../components/home/Header";
import ToDoList from "../components/home/ToDoList";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const handleRemoveTodo = (removeId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== removeId);
    setTodos(updatedTodos);
  };
  const handleUpdateTodos = (currentId) => {
    setTodos(currentId);
  };
  return (
    <div>
      <Header onAddTodo={handleAddTodo} />
      <ToDoList
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onUpdateTodos={handleUpdateTodos}
      />
    </div>
  );
};

export default HomePage;
