import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer);
export default CounterContainer;
