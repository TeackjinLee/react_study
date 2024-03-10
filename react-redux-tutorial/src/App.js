import React from 'react';
// import Counter from './compontes/Counter';
// import Todos from './compontes/Todos';
import CounterContainer from './compontes/CounterContainer';
import TodosContainer from './compontes/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
