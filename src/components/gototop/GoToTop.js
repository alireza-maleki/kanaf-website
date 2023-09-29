import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import classes from "./GoToTop.module.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          data-aos="fade-left"
          data-aos-easing="linear"
          className={`z-50 p-3 w-12 h-12 rounded-full bg-white fixed right-6 bottom-16 md:bottom-6 ${classes['btn-shadow']}`}
          onClick={scrollToTop}
        >
          <MdOutlineKeyboardArrowUp
            className={`text-2xl text-[#000]`}
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;