import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../compontes/Counter';
import { increase, decrease } from '../modules/counter';

// 17.5.1 CounterContiner 만들기
/*
    react-redux에서 제공하는 connect함수를 사용
    connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
    mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
    mapDispatchToProps는 액션 생정 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
    좀더 쉽게 풀면
    const makeContainer = connect(mapStateToProps, mapDispactchToProps)
    makeContainer(타깃 컴포넌트)
*/
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispactchToProps = (dispatch) =>
//   // 임시 함수
//   //   {(
//   //   increase: () => {
//   //     dispatch(increase());
//   //   },
//   //   decrease: () => {
//   //     dispatch(decrease());
//   //   },)}
//   // bindActionCreators유틸함수 사용
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispactchToProps)(CounterContainer);
export default connect(
  // connect함수가 내부적으로 bindActionCreators작업을 대신해준다.
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
