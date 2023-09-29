import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import classes from "./Counter.module.css"

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}  onExit={() => setCounterOn(false)}>
      <div className="w-screen min-h-[500px] px-4 py-12 bg-secondary">
        <div className="font-bold text-[18px] w-full md:w-1/2 mx-auto flex items-center justify-center md:justify-start py-12">
          <div className={classes.line}></div>
          <p className="text-2xl md:text-2xl pb-4 font-bold text-white">آمار و ارقام و پروژه ها : </p>
          {/* <h1 className="text-lg px-6 md:px-0">
            شبکه عظیم صبا کارت که تلفیقی از شبکه نظام بانکی و حمل و نقل کشوری می
            باشد. در سراسر ایران عزیزمان فعال است.
          </h1> */}
        </div>

        <div className="container py-10 border-2 border-white drop-shadow-2xl backdrop-blur-3xl rounded-3xl w-full md:w-2/3 mx-auto bg-[#74787c] drop-shadow-2xl backdrop-blur-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-1 gap-8 py-4">
            <div className="flex flex-col space-y-4 p-4 text-center">
              <span className="font-bold text-3xl lg:text-4xl text-primary">
                {counterOn && (
                  <CountUp start={0} end={100} duration={8} delay={0} />
                )}
                <span className="pr-2">+</span>
              </span>
              <p className="text-xl text-[#fff]">مشتری ها</p>
            </div>

            <div className="flex flex-col space-y-4 p-4 text-center">
              <span className="font-bold text-3xl lg:text-4xl text-primary">
                {counterOn && (
                  <CountUp start={0} end={10} duration={8} delay={0} />
                )}
                <span className="pr-2">+</span>
              </span>
              <p className="text-xl text-[#fff]">شرکت ها</p>
            </div>

            <div className="flex flex-col space-y-4 p-4 text-center">
              <span className="font-bold text-3xl lg:text-4xl text-primary">
                {counterOn && (
                  <CountUp start={0} end={15} duration={8} delay={0} />
                )}
                <span className="pr-2">+</span>
              </span>
              <p className="text-xl text-[#fff]">سالهای فعالیت</p>
            </div>

            <div className="flex flex-col space-y-4 p-4 text-center">
              <span className="font-bold text-3xl lg:text-4xl text-primary">
                {counterOn && (
                  <CountUp start={0} end={20} duration={8} delay={0} />
                )}
                <span className="pr-2">+</span>
              </span>
              <p className="text-xl text-[#fff]">افراد متخصص</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
