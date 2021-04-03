import { useState, useEffect } from "react";

export const convertDate = date => {
  let month = date.slice(5, 7);
  let day = date.slice(8);
  let mon = "";
  switch (month) {
    case "01":
      mon = "Jan";
      break;
    case "02":
      mon = "Feb";
      break;
    case "03":
      mon = "Mar";
      break;
    case "04":
      mon = "Apr";
      break;
    case "05":
      mon = "May";
      break;
    case "06":
      mon = "June";
      break;
    case "07":
      mon = "Jul";
      break;
    case "08":
      mon = "Aug";
      break;
    case "09":
      mon = "Sep";
      break;
    case 10:
      mon = "Oct";
      break;
    case 11:
      mon = "Nov";
      break;
    case 12:
      mon = "Dec";
      break;
    default:
      mon = "Jan";
      break;
  }
  return `${mon} ${day}`;
};

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
