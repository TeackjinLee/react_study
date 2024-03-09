// 17.4.1 스토어 만들기
import React from 'react';
import { ReactDOM } from 'react';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

ReactDOM.render(<App />, document.getElementById('root'));
