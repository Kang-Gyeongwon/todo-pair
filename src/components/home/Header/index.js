import { useState } from "react";
import { Headline, InputBox, FormLabel, FormInput, AddBtn } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, changeInput } from "../../../redux/modules/todos";

const Header = () => {
  const [todosValues, setTodoValue] = useState({
    title: "",
    body: "",
    isDone: false,
  });

  const dispatch = useDispatch();
  // const input = useSelector((state) => state.todos);
  const handleInputChange = (e) => {
    setTodoValue({
      ...todosValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickSubmit = () => {
    todosValues.title === "" || todosValues.body === ""
      ? window.alert("모든 내용을 입력해주세요")
      : dispatch(AddTodo(setTodoValue));
    dispatch(
      changeInput({
        title: "",
        body: "",
      })
    );
  };

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
          value={todosValues.title}
        />
        <FormLabel>내용</FormLabel>
        <FormInput
          name="body"
          type="text"
          value={todosValues.body}
          onChange={handleInputChange}
        />
        <AddBtn type="submit" value="추가하기" onClick={handleClickSubmit} />
      </InputBox>
    </div>
  );
};

export default Header;
