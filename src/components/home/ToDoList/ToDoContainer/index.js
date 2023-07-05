import { BtnBox, ToDoBtn, ToDoContainerBox, DeatailMoveBtn } from "./styled";
import { useNavigate } from "react-router-dom";
const ToDoContainer = (props) => {
  const navigate = useNavigate();
  return (
    <ToDoContainerBox>
      <div>
        <div>
          <h2>{props.title}</h2>
          <span>{props.body}</span>
        </div>
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
      <DeatailMoveBtn
        onClick={() => {
          navigate(`/detail/${props.id}`);
        }}
      >
        +
      </DeatailMoveBtn>
    </ToDoContainerBox>
  );
};

export default ToDoContainer;
