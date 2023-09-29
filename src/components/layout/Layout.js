import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
import { Link as changePage } from "react-router-dom";
import { Link } from "react-scroll";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollWindow, setScrollWindow] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // تابعی برای بررسی تغییر اسکرول صفحه و تنظیم ارتفاع
    const handleScroll = () => {
      const newScrollHeight = window.scrollY;
      if (newScrollHeight > 100) {
        setScrollWindow(true);
      } else {
        setScrollWindow(false);
      }
    };

    // اضافه کردن رویداد اسکرول به وقتی کامپوننت مونت شده است
    window.addEventListener("scroll", handleScroll);

    // حذف رویداد اسکرول در زمان عدم نیاز به آن
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 shadow-2xl bg-[#fff] transition duration-300 ease-in fixed top-0 right-0 left-0 w-screen h-[60px] flex items-center justify-between px-4 md:px-14 ${
        scrollWindow ? "bg-[#fff]" : ""
      } ${isOpen ? "bg-[#fff] backdrop-blur-[3px]" : ""}  `}
    >
      {/* === Header for large view (website) === */}
      <ul
        className={`hidden md:flex items-center justify-around w-[60%] ${classes["menu-list"]}`}
      >
        <li className="cursor-pointer">
          <Link to="/" spy={true} smooth={true} offset={0} duration={4000}>
            خانه
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link
            to="clients"
            spy={true}
            smooth={true}
            offset={0}
            duration={4000}
          >
            مشتری ها
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link
            to="khadamat"
            spy={true}
            smooth={true}
            offset={0}
            duration={4000}
          >
              خدمات ما
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="footer" spy={true} smooth={true} offset={0} duration={4000}>
            درباره ما
          </Link>
        </li>
      </ul>

      {/* === Hamburger Menu Button === */}
      <div
        className={`${classes["hamburger-menu"]} md:hidden`}
        onClick={handleMenuToggle}
      >
        <div
          className={`${classes.hamburger} ${
            isOpen ? classes["is-active"] : ""
          }`}
        >
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </div>

      <div>
        <changePage to="/" className={`cursor-pointer text-primary font-bold text-2xl ${classes.logo}`}>KanafShamsaie</changePage>
      </div>

      <div
        className={`z-50 block md:hidden w-full h-full ${
          classes["mobile-menu"]
        } 
            ${isOpen ? classes.open : ""}
          `}
      >
        <ul
          className={`flex items-center flex-col w-full h-full bg-[#fff] space-y-10 pt-8 text-[20px] text-black`}
        >
          <li className="cursor-pointer">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={4000}
              onClick={handleMenuToggle}
            >
              خانه
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              to="clients"
              spy={true}
              smooth={true}
              offset={0}
              duration={4000}
              onClick={handleMenuToggle}
            >
              مشتری ها
            </Link>
          </li>

          <li onClick={handleMenuToggle} className="cursor-pointer">
            <Link
              to="khadamat"
              spy={true}
              smooth={true}
              offset={0}
              duration={4000}
              onClick={handleMenuToggle}
            >
                خدمات ما
            </Link>
          </li>
          <li onClick={handleMenuToggle} className="cursor-pointer">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={4000}
              onClick={handleMenuToggle}
            >
              درباره ما
            </Link>
          </li>
        </ul>

      </div>

    </div>
  );
};

export default Layout;
