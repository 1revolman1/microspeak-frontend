import React, { useState } from "react";
import { StyledInput, StyledContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getChatsByIndex } from "../../../../reduxThunk/selector/Friend";
import { currentUser } from "../../../../reduxThunk/selector/User";
import { friendSocketSendMessage } from "../../../../reduxThunk/actions/Friend";

export default function ChatMessage({ fullscreen, sidebarchat }) {
  //REDUX
  const dispatch = useDispatch();
  const selectedChat = useSelector(getChatsByIndex);
  const me = useSelector(currentUser);
  //REDUX
  const [input, setInput] = useState("");
  return (
    <StyledContainer sidebarchat={sidebarchat} fullscreen={fullscreen}>
      <StyledInput
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            const data = {
              type: "MESSAGE",
              data: event.target.value,
              chat: selectedChat._id,
              owner: me._id,
            };
            dispatch(friendSocketSendMessage(data));
            setInput("");
          }
        }}
        type="text"
        value={input}
        placeholder="Enter your message"
      ></StyledInput>
    </StyledContainer>
  );
}
