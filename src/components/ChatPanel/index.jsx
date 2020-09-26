import React, { useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import UnreadMessages from "./components/UnreadMessages";
import { StyledChat, ChatMessages } from "./styled";
import { getMessages } from "../../reduxThunk/selector/Friend";
import { currentUser } from "../../reduxThunk/selector/User";
import useStayScrolled from "react-stay-scrolled";

export default function ChatPanel({
  chatRegime = true,
  fullscreen,
  setFullscreen,
  sidebarchat,
}) {
  //REDUX
  const myUser = useSelector(currentUser);
  const messages = useSelector(getMessages);
  //REDUX
  const listRef = useRef();
  const { stayScrolled } = useStayScrolled(listRef);
  useLayoutEffect(() => {
    console.log("LAYOUT EFFECT");
    stayScrolled();
  }, [messages]);

  useEffect(() => {
    console.log("RECIEVE NEW MESSAGES", messages);
  }, [messages]);
  // ChatMessages;
  return (
    <StyledChat chatRegime={chatRegime} fullscreen={fullscreen}>
      <ChatMessages ref={listRef} sidebarchat={sidebarchat}>
        {messages &&
          messages.map(({ type, my, _id, data, createdAt }, index) => {
            return (
              <ChatMessage
                date={new Date(createdAt).toLocaleString()}
                data={data}
                key={_id}
                type={type}
                whose={my ? "MY" : "OTHER"}
                nickname={my ? myUser.nickname : "Daria"}
              />
            );
          })}
        {/* <ChatMessage type="MESSAGE" whose="MY" />
        <ChatMessage type="MESSAGE" whose="OTHER" />
        <ChatMessage type="IMG" whose="OTHER" />
        <ChatMessage type="MESSAGE" whose="OTHER" />
        <ChatMessage type="VIDEO" whose="OTHER" />
        <UnreadMessages />

        <ChatMessage type="MESSAGE" whose="MY" />
        <ChatMessage type="IMG" whose="MY" />
        <ChatMessage type="IMG" whose="OTHER" />
        <ChatMessage type="VIDEO" whose="MY" /> */}
        {/* <ChatMessage type="FILE" whose="MY" /> */}
      </ChatMessages>
      <ChatInput sidebarchat={sidebarchat} fullscreen={fullscreen} />
    </StyledChat>
  );
}
