import { BtnBox, ToDoBtn, ToDoContainerBox } from "./styled";

const ToDoContainer = (props) =>  {
  return (
    <ToDoContainerBox>
      <div>
        <h2>{props.title}</h2>
        <span>{props.body}</span>
      </div>
      <BtnBox>
        <ToDoBtn
          onClick={() => {
            props.handleRemoveOnclick(props.id);
          }}
        >
          삭제하기
        </ToDoBtn>
        <ToDoBtn
          onClick={() => {
            props.handleCompletionOnclick(props.id);
          }}
        >
          완료
        </ToDoBtn>
      </BtnBox>
    </ToDoContainerBox>
  );
}

export default ToDoContainer;