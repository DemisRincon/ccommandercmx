import { useState, useEffect } from "react";

const IsMobile = () => {

  const [isMobile, setIsMobile] = useState(undefined);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {

    function handleResize() {
   
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }


    window.addEventListener("resize", handleResize);

    handleResize();


    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const handleResize = () => setIsMobile(windowSize.width <= 1024);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default IsMobile;
