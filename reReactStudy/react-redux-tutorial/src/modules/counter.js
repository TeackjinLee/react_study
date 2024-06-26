import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// export const increase = () => ({ type: INCREASE });
export const increase = createAction(INCREASE);
// export const decrease = () => ({ type: DECREASE });
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};
console.log(123);
console.log(this);
// function counter(state = initialState, action) {
//   console.log("dfs");
//   console.log(action);

//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
