import { useState } from "react";
import Header from "../components/home/Header";
import ToDoList from "../components/home/ToDoList";

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
      <ToDoList />
    </div>
  );
};

export default HomePage;
