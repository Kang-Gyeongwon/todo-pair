import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducers = combineReducers({
  todos,
});
const store = createStore(rootReducers);

export default store;
