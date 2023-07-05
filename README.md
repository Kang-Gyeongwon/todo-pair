# ToDoList - Pair
#### 항해99 주특기주차 level2 과제


## 이 프로젝트에서 구현해야 할것
- todo 데이터를 redux를 사용해서 전역으로 상태 관리를 함
- todo데이터를 추가하면 input은 다시 빈값이 되도록 구현
- input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현
- todo id 생성시 고유한 값을 지정
- todo의 완료상태가 true이면, 상태버튼의 라벨을 "취소", false이면 라벨을 "완료"로 보이도록 구현
- 상세보기 버튼을 누르면 todo의 상세페이지 이동
- 상세페이지에서 todo의 id / 제목 / 내용/ 이전버튼 구현


## Code Convention
- 변수명은 camel case로 작성
- 이벤트 핸들링에 사용하는 함수는 handle과 각 이벤트명을 입력
##### 컴포넌트 구조
- 컴포넌트 이름을 폴더로 작성
  - index.js를 생성하여 그 안에 jsx문법을 작성
  - styled.js를 생성하여 그 안에 sytle을 작성함

## 역활 분배
- redux - 경원
- home관련 페이지 전반적인 기능 - 경원
- App.js에 라우터 설정 - 경원
- detailpage 관련 전반적인 기능 - 정백
- 상세페이지로 이동하는 버튼 부분 - 정백