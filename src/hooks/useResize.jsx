import { useState, useEffect } from "react";
export const useResize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resize", handleResize);
  }, []);
  return size;
};
