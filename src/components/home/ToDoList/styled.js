import { styled } from "styled-components";

export const ToDoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  margin-right: 5px;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
export const ToDoBtn = styled.button`
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

export const boxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};
