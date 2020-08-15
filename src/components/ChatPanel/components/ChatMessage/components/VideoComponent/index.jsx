import React, { useRef, useEffect, useState } from "react";
import { StyledVideoInterface } from "./styled";
import { ReactComponent as Pause } from "./assets/pause.svg";

export default function VideoPlayer({ src }) {
  const [showpause, setShowPause] = useState(true);
  const video = useRef(null);
  const pauseBTN = useRef(null);
  const pauseFunc = function () {
    console.log("PAUSE");
    setShowPause(false);
  };
  const playFunc = function () {
    console.log("PLAY");
    setShowPause(true);
  };
  useEffect(() => {
    video.current.addEventListener("pause", pauseFunc);
    video.current.addEventListener("play", playFunc);
    return () => {
      video.current.removeEventListener("pause", pauseFunc);
      video.current.removeEventListener("play", playFunc);
    };
  }, []);
  return (
    <>
      <StyledVideoInterface pause={showpause}>
        <Pause
          onClick={(e) => {
            video.current.play();
          }}
        />
      </StyledVideoInterface>
      <video ref={video} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
