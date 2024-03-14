import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";

// 18.1 작업환경 준비하기
const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
