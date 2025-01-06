import useScrollHandling from "@/hooks/useScrollHandling";
import { useState, useEffect } from "react";

const useTranslateXImage = () => {
  const { scrollDirection, scrollPosition } = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(60);

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
    handleTranslateX();
  }, [scrollPosition]);
  return { translateXPosition };
};

export default useTranslateXImage;
