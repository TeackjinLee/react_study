import logo from "./logo.svg";
import "./App.css";

function App() {
  // 데이터바인딩이 쉬워지는 React, Vue, Angular
  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>개발 Blog</div>
      </div>
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
