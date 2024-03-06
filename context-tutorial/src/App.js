import "./App.css";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    // <div>
    //   <ColorBox />
    // </div>
    // 15.2.3 Provider
    // <ColorContext.Provider value={{ color: "red" }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>
    // 15.3.2 새로워진 Context를 프로젝트에 반영하기
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
