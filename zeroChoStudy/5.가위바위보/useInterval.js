import { useRef, useEffect } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    console.log("1");
    savedCallback.current = callback;
  });

  useEffect(() => {
    console.log("2");
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
