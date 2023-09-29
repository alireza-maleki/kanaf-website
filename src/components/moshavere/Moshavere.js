import React from 'react';
import classes from "./Moshavere.module.css";
import {BsTelephoneInboundFill} from "react-icons/bs";

import background_img from "../images/gallery/18.jpeg";

const Moshavere = () => {
  return (
    <div id="moshavere" className="flex items-center justify-center bg-[#f1f1f1] relative w-screen min-h-[550px] md:h-[550px]">

       <div className='absolute mx-auto rounded-xl top-[10%] space-y-6 flex flex-col items-center justify-center w-[90%] md:w-[60%] h-[60%] md:h-[80%] bg-[#ffffff99]'>
            <BsTelephoneInboundFill className={`text-5xl font-bold text-primary mb-6 ${classes.icons}`} />
            <p className='text-xl font-bold'>مشاوره و اطلاع از قیمت ها</p>
            <button className='text-xl font-bold py-2 px-8 rounded-lg text-white bg-secondary hover:bg-primary duration-300 cursor-pointer'>09127923061</button>
        </div> 


    </div>
  )
}

export default Moshavere