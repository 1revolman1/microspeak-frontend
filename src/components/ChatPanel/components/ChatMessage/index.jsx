import React, { useRef, useEffect } from "react";
import {
  StyledContainer,
  StyledMessage,
  StyledImg,
  StyledMessageContainer,
} from "./styled";
import Video from "./components/VideoComponent";
// import File from "./components/FileInputComponent";
// {
//   type:["MESSAGE","IMG","FILE","VIDEO"]
// }
export default function ChatMessage({ type, whose, date, data, nickname }) {
  return (
    <StyledContainer>
      <StyledImg whose={whose}>
        <img
          alt="Avatar of your speaker"
          src="https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg"
        />
      </StyledImg>
      <StyledMessageContainer whose={whose}>
        <span>
          {nickname}, {date}
        </span>
        <StyledMessage whose={whose} type={type}>
          {type === "MESSAGE" && (
            <p>
              {data}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt */}
            </p>
          )}
          {type === "IMG" && (
            <img
              alt="Your img"
              src="https://cs8.pikabu.ru/post_img/big/2017/10/18/11/1508356314177978739.jpg"
            />
          )}
          {type === "VIDEO" && (
            <Video src="https://html5css.ru/edithtm/movie.mp4" />
          )}
          {/* {type === "FILE" && <File />} */}
        </StyledMessage>
      </StyledMessageContainer>
    </StyledContainer>
  );
}
