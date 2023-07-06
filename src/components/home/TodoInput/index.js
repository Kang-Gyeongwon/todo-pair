import { InputBox , FormLabel, FormInput, AddBtn } from "./styled";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todosData";
import { useCallback, useState } from "react";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    title: "",
    body: "",
  });
  const handleInputChange = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickSubmit = useCallback(() => {
    const inputData = {
      id: Date.now(),
      title: inputForm.title,
      body: inputForm.body,
      isDone: false,
    };
    inputForm.title === "" || inputForm.body === ""
      ? window.alert("모든 내용을 입력해주세요")
      : dispatch(addTodo(inputData));
    setInputForm({
      title: "",
      body: "",
    });
  }, [dispatch, inputForm]);
  return (
    <InputBox>
      <FormLabel>제목</FormLabel>
      <FormInput
        name="title"
        type="text"
        onChange={handleInputChange}
        value={inputForm.title}
      />
      <FormLabel>내용</FormLabel>
      <FormInput
        name="body"
        type="text"
        value={inputForm.body}
        onChange={handleInputChange}
      />
      <AddBtn type="submit" value="추가하기" onClick={handleClickSubmit} />
    </InputBox>
  );
};

export default TodoInput;
