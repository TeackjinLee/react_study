import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 11.1 많은 데이터 렌더링하기
function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// 11.5.2 useReducer 사용하기
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      // {type: 'INSERT', todo: {id:1, text:'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE':
      // {type:'REMOVE', id:1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      // {type: 'TOGGLE', id:1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

// 10.1.4 App 컴포넌트 초기화
const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: `리액트의 기초 알아보기`,
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: `컴포넌트 스타일링해 보기`,
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: `일정 관리 앱 만들어 보기`,
  //     checked: false,
  //   },
  // ]);
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  // 11.5.1 useState의 함수형 업데이트
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  // 10.3.4 수정기능
  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
