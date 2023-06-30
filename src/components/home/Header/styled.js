import { styled } from "styled-components";

export const Headline = styled.div`
  width: 1200px;
  margin: 0;
  padding: 0 20px 5.75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  border-bottom: 1px solid #ddd;
`;

export const InputBox = styled.div`
  width: 1200px;
  background-color: #eee;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;

export const FormLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 3px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  margin-right: 5px;
  width: 240px;
`;

export const AddBtn = styled.input`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
