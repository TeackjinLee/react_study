import React from 'react';
import Counter from './compontes/Counter';
import Todos from './compontes/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0}>리액트</Counter>
      <hr />
      <Todos />
    </div>
  );
};

export default App;
