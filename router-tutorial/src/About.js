import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";

// 13.2.3 페이지 만들기
// const About = () => {
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
//     </div>
//   );
// };

// 13.4.2 URL 쿼리
const About = () => {
  const location = useLocation(); // useLocation 훅을 사용하여 location 객체를 가져옵니다.
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });

  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
