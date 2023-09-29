import React from "react";

import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="flex flex-col items-center justify-between w-screen min-h-[400px] bg-primary text-white p-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 mt-24 px-4">
         
          <div className="text-white text-center md:text-start w-[90%] md:w-[50%]">
            <h2 className="text-xl font-semibold mb-4">درباره ما</h2>
            <p className="text-base leading-8">
              ما به عنوان یک منبع قابل اعتماد برای تمامی نیازهای کنافی شما
              آماده‌ایم و به دنبال ایجاد فضاهای زیبا و عالی در هر پروژه‌ای
              هستیم. با کناف شمسایی، تخیل خود را به واقعیت تبدیل کنید و به یک
              دنیایی از زیبایی و انطباق با محیط پیرامون خوش آمدید.
            </p>
          </div>

          <div className="flex flex-col justify-start w-[90%] md:w-[50%] h-full ">
            <div
              className="pb-4 md:pb-0 flex flex-col space-y-4 w-full "
              style={{ direction: "ltr" }}
            >
              <div className="flex cursor-pointer">
                <HiPhone className="text-2xl mx-4 text-white" />
                <span className="text-white">09127923061</span>
              </div>
              
              <div className="flex cursor-pointer">
                <AiFillInstagram className="text-2xl mx-4 text-pink-500" />
                <span className="text-white">Kanuf_shamsaee66</span>
              </div>
              
              <div className="flex cursor-pointer">
                <AiOutlineWhatsApp className="text-2xl mx-4 text-green-500" />
                <span className="text-white">09357116266</span>
              </div>

              <div className="flex cursor-pointer">
                <BsTelegram className="text-2xl mx-4 text-blue-500" />
                <span className="text-white">09357116266</span>
              </div>
              
              <div className="flex cursor-pointer">
                <MdEmail className="text-2xl mx-4" />
                <span className="text-white">kanafshamsaie@gmail.com</span>
              </div>
            </div>

          </div>

        </div>

        <div className="container mx-auto flex items-center justify-center pt-8">
          <p className="text-white border-t-2 border-gray-500 pt-2 w-[90%] md:w-[50%] text-center">تمامی حقوق این وب سایت محفوظ است.</p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
