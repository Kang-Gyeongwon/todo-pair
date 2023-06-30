import { BtnBox, ToDoBtn, ToDoContainer, boxStyle } from "./styled";

const ToDoList = (props) => {
  const todos = props.todos;
  const handleCompletionOnclick = (currentId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === currentId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    props.onUpdateTodos(updatedTodos);
  };
  const handleRemoveOnclick = (removeId) => {
    props.onRemoveTodo(removeId);
  };
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <ToDoContainer key={todo.id}>
                  <div>
                    <h2>{todo.title}</h2>
                    <spna>{todo.body}</spna>
                  </div>
                  <BtnBox>
                    <ToDoBtn
                      onClick={() => {
                        handleRemoveOnclick(todo.id);
                      }}
                    >
                      삭제하기
                    </ToDoBtn>
                    <ToDoBtn
                      onClick={() => {
                        handleCompletionOnclick(todo.id);
                      }}
                    >
                      완료
                    </ToDoBtn>
                  </BtnBox>
                </ToDoContainer>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            if (todo.isDone !== false) {
              return (
                <ToDoContainer key={todo.id}>
                  <div>
                    <h2>{todo.title}</h2>
                    <spna>{todo.body}</spna>
                  </div>
                  <BtnBox>
                    <ToDoBtn
                      onClick={() => {
                        handleRemoveOnclick(todo.id);
                      }}
                    >
                      삭제하기
                    </ToDoBtn>
                    <ToDoBtn
                      onClick={() => {
                        handleCompletionOnclick(todo.id);
                      }}
                    >
                      취소
                    </ToDoBtn>
                  </BtnBox>
                </ToDoContainer>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
