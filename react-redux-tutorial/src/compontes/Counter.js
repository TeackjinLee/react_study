import React from 'react';
// 17.2.1 카운터 컴포넌트 만들기
const Counter = ({ number, onIncrease, onDecrease, children }) => {
  return (
    <div>
      {children}
      <h1>{number}</h1>

      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
