import { styled } from "styled-components";

export const ToDoContainer = styled.div`
  border-radius: 25px;
  padding: 12px 24px 24px;
  width: 270px;
  margin-right: 5px;
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
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  color: #14213d;
`;

export const boxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};
