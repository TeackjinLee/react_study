import { createContext } from "react";
// 15.2.1 새 Context 만들기
const ColorContext = createContext({ color: "black" }); // context의 기본 상태

export default ColorContext;
