import { styled } from "styled-components";

export const ToDoContainerBox = styled.div`
  border-radius: 25px;
  padding: 12px 24px 24px;
  width: 270px;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #14213d;
  color: #e5e5e5;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
export const ToDoBtn = styled.button`
  background-color: #fca311;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  color: #14213d;
  @font-face {
    font-family: "Uiyeun";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105@1.1/Uiyeun.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "Uiyeun";
  color: #e8e8e8;
`;

export const boxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
};
