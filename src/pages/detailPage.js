import React from "react";
import {
  ListBox,
  homeMoveBtn,
  Header,
  InnerBox,
} from "../components/DetailPage/styled";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const todo = useSelector((state) => state.todosData.todos);
  const filterTodo = todo.filter((item) => item.id === Number(params.todo));

  return (
    <ListBox>
      <Header>My Todo</Header>
      <InnerBox>
        {filterTodo.map((item) => {
          return (
            <div key={item.id}>
              <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>
                {item.title}
              </h1>
              <p style={{ fontSize: "26px" }}>{item.body}</p>
              <div style={{marginTop: '95px'}}>
                <p>id: {item.id}</p>
                <p>{new Date(item.id).toLocaleDateString()}</p>
              </div>
            </div>
          );
        })}
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
