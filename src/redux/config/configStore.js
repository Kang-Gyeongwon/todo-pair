import { createStore } from "redux";
import { combineReducers } from "redux";
import todosData from "../modules/todosData";

const rootReducer = combineReducers({
  todosData,
});

const store = createStore(rootReducer);

export default store;
