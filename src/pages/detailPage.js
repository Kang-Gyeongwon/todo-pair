import React from "react";
import {
  ListBox,
  homeMoveBtn,
  Header,
  InnerBox,
} from "../components/DetailPage/styled";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <ListBox>
      <Header>My Todo</Header>
      <InnerBox>
        <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>제목</h1>
        <p style={{ fontSize: "26px" }}>내용</p>
      </InnerBox>
      <button style={homeMoveBtn} onClick={() => navigate("/")}>
        <span 
        className="material-symbols-outlined"
        style={{color: "white"}}
        >undo</span>
      </button>
    </ListBox>
  );
};

export default DetailPage;
