import React from 'react';
// import Counter from './compontes/Counter';
import Todos from './compontes/Todos';
import CounterContainer from './compontes/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
