import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../modules/counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  // 17.7.1 useSelector로 상태 조회하기
  const number = useSelector((state) => state.counter.number);
  // 17.7.2 useDispatch를 사용하여 액션 디스패치하기
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
