import "./App.css";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";

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
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
