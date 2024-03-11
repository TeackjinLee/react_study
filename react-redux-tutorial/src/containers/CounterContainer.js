import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Counter from '../modules/counter';
import { increase, decrease } from '../modules/counter';
// 17.7.1 useSelector로 상태 조회하기
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  return <Counter number={number} />;
};

export default CounterContainer;
