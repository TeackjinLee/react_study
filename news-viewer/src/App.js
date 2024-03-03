import React, { useState, useCallback } from 'react';
// import axios from 'axios';
import NewsList from './components/NewList';
import Categories from './components/categories';

// 14.2 axios로 API 호출해서 데이터 받아 오기
/* 
axios는 현재 가장 많이 사용되고 있는 자바스크립스 HTTP 클라이언트
이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점입니다.
*/
const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       // 14.3 newsapi API 키 발급받기
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=149add35895d45fdbe245b246db0daeb',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   // axios
  //   //   .get('https://jsonplaceholder.typicode.com/todos/1')
  //   //   .then((response) => {
  //   //     setData(response.data);
  //   //   });
  // };
  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && (
  //       <textarea rows={7} defaultValue={JSON.stringify(data, null, 2)} />
  //     )}
  //   </div>
  // );

  // 14.4 뉴스 뷰어 UI 만들기
  const [category, setCategory] = useState('all');
  console.log(category);
  const onSelect = useCallback((category) => setCategory(category), []);
  console.log(onSelect);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
