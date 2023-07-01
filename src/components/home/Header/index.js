import { Headline, InputBox, FormLabel, FormInput, AddBtn } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, changeInput } from "../../../redux/modules/todos";
import { useCallback } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const inputData = useSelector((state) => state.todos.inputData);
  const handleInputChange = (e) => {
    const setTodoValue = {
      ...inputData,
      [e.target.name]: e.target.value,
    };
    dispatch(changeInput(setTodoValue));
  };

  const handleClickSubmit = useCallback(() => {
    inputData.title === "" || inputData.body === ""
      ? window.alert("모든 내용을 입력해주세요")
      : dispatch(AddTodo(inputData));
    dispatch(
      changeInput({
        title: "",
        body: "",
      })
    );
  }, [dispatch, inputData]);

  return (
    <div style={{ marginTop: "5%" }}>
      <Headline>
        <span>My Todo List</span>
      </Headline>
      <InputBox>
        <FormLabel>제목</FormLabel>
        <FormInput
          name="title"
          type="text"
          onChange={handleInputChange}
          value={inputData.title}
        />
        <FormLabel>내용</FormLabel>
        <FormInput
          name="body"
          type="text"
          value={inputData.body}
          onChange={handleInputChange}
        />
        <AddBtn type="submit" value="추가하기" onClick={handleClickSubmit} />
      </InputBox>
    </div>
  );
};

export default Header;
