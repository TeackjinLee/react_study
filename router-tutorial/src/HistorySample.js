import React from "react";
import { useNavigate } from "react-router-dom";

// 13.6 리액트 라우터 부가기능
// 13.6.1 history
function HistorySample() {
  const navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm("정말 떠나시겠어요?");
    if (confirm) {
      navigate(-1);
    }
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}
export default HistorySample;
