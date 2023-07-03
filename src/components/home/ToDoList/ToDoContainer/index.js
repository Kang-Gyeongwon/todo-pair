import { BtnBox, ToDoBtn, ToDoContainerBox } from "./styled";

const ToDoContainer = (props) => {
  return (
    <ToDoContainerBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>{props.title}</h2>
          <span >{props.body}</span>
        </div>
        <span style={{cursor: "pointer"}}>+</span>
      </div>
      <BtnBox>
        <ToDoBtn
          onClick={() => {
            props.onRemoveOnclick(props.id);
          }}
        >
          삭제하기
        </ToDoBtn>
        <ToDoBtn
          onClick={() => {
            props.onCompletionOnclick(props.id);
          }}
        >
          완료
        </ToDoBtn>
      </BtnBox>
    </ToDoContainerBox>
  );
};

export default ToDoContainer;
