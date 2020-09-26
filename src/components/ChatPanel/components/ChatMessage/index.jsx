import React from "react";
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
export default function ChatMessage({
  type,
  whose,
  date,
  data,
  nickname,
  avatar,
}) {
  return (
    <StyledContainer>
      <StyledImg whose={whose}>
        <img alt="Avatar of your speaker" src={avatar} />
      </StyledImg>
      <StyledMessageContainer whose={whose}>
        <span>
          {nickname}, {date}
        </span>
        <StyledMessage whose={whose} type={type}>
          {type === "MESSAGE" && <p>{data}</p>}
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
