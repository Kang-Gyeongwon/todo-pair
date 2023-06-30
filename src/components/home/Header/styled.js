import { styled } from "styled-components";

export const Headline = styled.div`
  padding: 0 20px 5.75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 30px;
  color: #ddd;
`;

export const InputBox = styled.div`
  background-color: #14213d;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background-color: #14213d;
`;

export const FormLabel = styled.span`
  font-size: 25px;
  font-weight: 500;
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
  background-color: #fca311;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  height: 40px;
  width: 140px;
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
