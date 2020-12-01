import { useEffect, useState } from "react";

// get the window dimensions
export const useWindowSize = () => {
  // check if window is loaded
  const isClient = typeof window === "object";

  // extract the size of the window
  const getSize = () => {
    return isClient
      ? { windowWidth: window.innerWidth, windowHeight: window.innerHeight }
      : { windowWidth: null, windowHeight: null };
  };

  // state
  const [windowSize, setWindowSize] = useState(getSize);

  // lifecycle hooks
  // add listeners on mount
  useEffect(() => {
    // check the window
    if (!isClient) return false;

    // handle window resize
    const handleResize = () => {
      setWindowSize(getSize());
    };

    // resize listener
    window.addEventListener("resize", handleResize);

    // remove the listener on unmount
    return () => window.removeEventListener("resize", handleResize);

    // don't fill the array
    // need to run this only on mount
    // eslint-disable-next-line
  }, []);

  return windowSize;
};
