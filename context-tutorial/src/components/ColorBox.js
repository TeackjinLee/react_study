import React from "react";
import ColorContext from "../contexts/color";
// 15.2.2 Consumer 사용하기
const ColorBox = () => {
  console.log("sss");
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
