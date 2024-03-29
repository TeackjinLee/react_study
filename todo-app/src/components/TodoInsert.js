// 10.3.2.1 TodoInsert value 상태 관리하기
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setvalue] = useState('');

  const onChange = useCallback((e) => {
    setvalue(e.target.value);
  }, []);

  // 10.3.2.3 todos 배열에 새 객체 추가하기
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setvalue('');

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

// 10.2.2 TodoInsert 만들기
/********************************************
 * 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다.
 * state를 통해 인풋의 상태를 관리합니다.

import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
 ********************************************/
export default TodoInsert;
