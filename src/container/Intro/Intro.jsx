import React, { useState, useRef } from "react";

import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { meal } from "../../constants"; //clip video
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false); //keeps track of the video is currently playing or paused
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo); // toggles the playVideo state between true and false.

    if (playVideo) {
      vidRef.current.pause(); // if true, pause method is called on
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsFillPauseFill color="#FFFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
