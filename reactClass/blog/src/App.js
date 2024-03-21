/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  // useState("남자 코트 추천"); //[a,b] a=남자코트추천  b=남자코트추천 state정정해주는 함수
  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남 우동 맛집",
    "코린이의하루",
  ]);

  // let titleChange = () => {
  //   글제목변경(글제목.with(0, "여자코트추천"));
  // };
  // let titleChange = () => {
  //   글제목변경(
  //     글제목.map((item) => (item === "남자코트추천" ? "여자코트추천" : item))
  //   );
  // };

  // let titleChange = () => {
  //   let newArray = [...글제목];
  //   newArray[0] = "여자코트추천";
  //   글제목변경(newArray);
  // };

  let titleChange = () => {
    let newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  };

  console.log(글제목);

  let [count, countState] = useState(0);

  // 데이터바인딩이 쉬워지는 React, Vue, Angular
  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>개발 Blog</div>
      </div>
      <button onClick={titleChange}>버튼</button>
      <div className="list">
        <h4>
          {" "}
          {글제목[0]}{" "}
          <span
            onClick={() => {
              countState(count + 1);
            }}
          >
            ❤️
          </span>{" "}
          {count}
        </h4>
        <p>2월 17일 발행</p>
        <hr />
        <h4> {글제목[1]} </h4>
        <p>2월 17일 발행</p>
        <hr />
        <h4> {글제목[2]} </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

// component
// 1. 대문자로 시작 2. return 안에 있는건 태그하나로 묶어야함
function Modal(props) {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
