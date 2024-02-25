import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      {/* 10.3.3.3 TodoListItem에서 삭제 함수 호출하기 */}
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

/****************************************
 * 11.4 React.memo를 사용하여 컴포넌트 성능 최적화
 * 컴포넌트의 props가 바꾸지 않았다면, 리랜더링하지
 * 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을
 * 최적화해 줄 수 있습니다.
 *****************************************/
export default React.memo(TodoListItem);
