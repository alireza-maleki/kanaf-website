import React from 'react';

import {IoIosArrowBack} from "react-icons/io";
import {PiPhoneCallLight} from "react-icons/pi";

const Dynamic = (props) => {
  return (
    <div>
         <h1 className='flex items-center mr-4'>خانه 
            <IoIosArrowBack className='text-primary' />
            {props.title}
        </h1>

        <div className='relative mx-auto flex flex-col items-center justify-center mt-4 w-[90%] h-[200px] bg-primary rounded-lg p-8'>

            <h1 className='font-black text-white text-2xl'>کناف شمسایی</h1>
            <p className='text-white mt-6'>نمایندگی اجرای پروژه های کناف</p>
            <p className='text-[#ffcf00] py-2'>با ما در تماس باشید</p>
            <p className='text-white'>09127923061</p>


            <div className="absolute bottom-1 left-1">
                <PiPhoneCallLight className="text-[#ffffffb3] w-[60px] h-[60px]" />
            </div>
        </div>
    </div>
  )
}

export default Dynamic