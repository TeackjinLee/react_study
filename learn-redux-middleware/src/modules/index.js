import { combineReducers } from "redux";
import counter from "./counter";
// 18.1 작업환경 준비하기
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
