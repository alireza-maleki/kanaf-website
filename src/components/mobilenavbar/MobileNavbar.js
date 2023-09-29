import React from "react";
import { FaPhoneAlt } from "react-icons/fa";


const MobileNavbar = () => {
  return (
    <div className="md:hidden flex flex-col items-center justify-center z-50 fixed bottom-0 right-0 left-0 w-screen h-[50px] bg-myGray">
      <a className="flex items-center justify-center" href="tel:09127923061">
        <div className="flex items-center justify-center absolute bottom-6 bg-primary w-[50px] h-[50px] rounded-full">
            <FaPhoneAlt className="text-white text-2xl" />
        </div>
      </a>
        <p className="absolute bottom-1 text-[15px] text-[#000] font-black">تماس بگیرید</p>
    </div>
  );
};

export default MobileNavbar;
