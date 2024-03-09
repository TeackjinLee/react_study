// 17.4.1 스토어 만들기
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

// 17.4.2 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기
const store = createStore(rootReducer);

const container = document.getElementById('root');
const root = createRoot(container); // TypeScript 사용 시 createRoot(container!)로 적용
root.render(<App />);
