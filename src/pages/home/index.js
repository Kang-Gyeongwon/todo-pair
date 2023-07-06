import Header from "../../components/home/Header";
import ToDoList from "../../components/home/ToDoList";
import TodoInput from "../../components/home/TodoInput";
import { homeBoxStyle } from "./styled";

const HomePage = () => {
  return (
    <div
      style={homeBoxStyle}
    >
      <Header />
      <TodoInput />
      <ToDoList />
    </div>
  );
};

export default HomePage;
