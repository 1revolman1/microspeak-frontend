import React, { useRef, useEffect, useState } from "react";
import { StyledVideoInterface } from "./styled";
import { ReactComponent as Pause } from "./assets/BlackPause.svg";
import { ReactComponent as Play } from "./assets/BlackPlay.svg";

export default function VideoPlayer({ src }) {
  const [setshowplay, setShowPlay] = useState(true);
  const video = useRef(null);
  const pauseFunc = function () {
    console.log("PAUSE");
    setShowPlay(true);
  };
  const playFunc = function () {
    console.log("PLAY", video.current);
    setShowPlay(false);
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
      <StyledVideoInterface pause={setshowplay}>
        {setshowplay ? (
          <Play
            type="PLAY"
            style={{ width: "100%", height: "100%", fill: "white" }}
            onClick={(e) => {
              video.current.play();
            }}
          />
        ) : (
          <Pause
            type="PAUSE"
            style={{ width: "100%", height: "100%", fill: "white" }}
            onClick={(e) => {
              video.current.pause();
            }}
          />
        )}
      </StyledVideoInterface>
      <video ref={video} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
