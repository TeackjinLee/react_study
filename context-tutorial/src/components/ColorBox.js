import React from "react";
// import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";
// 15.2.2 Consumer 사용하기
const ColorBox = () => {
  return (
    // <ColorContext.Consumer>
    //   {(value) => (
    //     <div
    //       style={{
    //         width: "64px",
    //         height: "64px",
    //         background: value.color,
    //       }}
    //     />
    //   )}
    // </ColorContext.Consumer>
    // 15.3.2 새로워진 Context를 프로젝트에 반영하기
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
