import React, { useEffect, useRef, useState } from "react";

const useTranslateX = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [translateXPosition, setTranslateXPosition] = useState(60);
  const [scrollPosition, setScrollPosition] = useState(0);
  const previousScrollPosition = useRef();

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };
  const handleTranslateX = () => {
    if (scrollDirection === "down" && scrollPosition >= 1900) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === "up") {
      setTranslateXPosition(
        translateXPosition >= 60 ? 60 : translateXPosition + 1
      );
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);
  // console.log('scrollPosition::', scrollPosition)
  // console.log('translateXPosition::', translateXPosition)
  return { translateXPosition };
};

export default useTranslateX;
