import { styled } from "styled-components";

export const ListBox = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid #fff;
  border-radius: 25px;
  background-color: #14213d;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  width: 250px;
  margin: 0 auto;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  border-bottom: 1px solid #fca311;
  padding: 10px;
  box-sizing: border-box;
`;

export const InnerBox = styled.div`
  margin: 20px 0 0 10px;
  padding: 20px;
  box-sizing: border-box;
  word-break: break-word;
`;

export const homeMoveBtn = {
  backgroundColor: "#fca311",
  borderRadius: "25px",
  cursor: "pointer",
  height: "40px",
  width: "100px",
  color: "#14213d",
  position: "absolute",
  top: "380px",
  left: "320px",
  outline: "none",
  transition: "0.5s",
  "&:hover": {
    background: "#14213d",
    color: "#fca311",
    transform: "scale(1.5)"
  }
};

