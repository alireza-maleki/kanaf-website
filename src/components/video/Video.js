import React, { useState, useRef } from "react";
import classes from "./Video.module.css";
import videoPath from "./kanaf.mp4";

import ejrayeKanaf from "./image/1.jpeg";

const Video = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    console.log(videoRef.current.pause());
    setIsPlaying((prevState) => !prevState);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div
      className={`py-16 md:py-0 relative w-screen min-h-[400px] md:h-[500px] flex flex-col md:flex-row items-center justify-between px-20`}
    >

      <div className="z-40 relative w-[100%] md:w-[25%] h-[80%] rounded-xl mb-10 md:mb-0">
        <video
          muted
          controls 
          disablePictureInPicture
          className="z-50 w-full h-full rounded-xl"
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>

      <div className="w-[100%] md:w-[60%] h-[100%] md:h-[80%]">
        <img className="w-full h-full rounded-xl cursor-pointer object-cover" src={ejrayeKanaf} alt="tamirat" />
        <p className="text-center text-gray-500 mt-3">اجرای طرح کناف</p>
      </div>

    </div>
  );
};

export default Video;
