import { createAction, handleActions } from 'redux-actions';

// 17.3.1.1 액션 타입 정의하기
// const 변수 = '모듈 이름/액션 이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 17.3.1.2 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// 17.6.1.1 counter 모듈에 적용하기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 17.3.1.3 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
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
  initialState,
);

export default counter;
