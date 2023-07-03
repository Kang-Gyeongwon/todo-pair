import React from "react";
import {
  ListBox,
  homeMoveBtn,
  Header,
  InnerBox,
} from "../components/DetailPage/styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });
  const navigate = useNavigate();

  return (
    <ListBox>
      <Header>My Todo</Header>
      <InnerBox>
        <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>{todos[0].title}</h1>
        <p style={{ fontSize: "26px" }}>{todos[0].body}</p>
        <p>아이디 값은: {todos[0].id}</p>
      </InnerBox>
      <button style={homeMoveBtn} onClick={() => navigate("/")}>
        <span className="material-symbols-outlined" style={{ color: "white" }}>
          undo
        </span>
      </button>
    </ListBox>
  );
};

export default DetailPage;
