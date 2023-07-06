import Header from "../components/home/Header";
import ToDoList from "../components/home/ToDoList";
import TodoInput from "../components/home/TodoInput";

const HomePage = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "800px",
        boxSizing: "border-box",
        margin: "auto",
      }}
    >
      <Header />
      <TodoInput />
      <ToDoList />
    </div>
  );
};

export default HomePage;
