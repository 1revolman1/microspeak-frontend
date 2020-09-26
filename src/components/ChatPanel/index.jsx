import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
// import UnreadMessages from "./components/UnreadMessages";
import { StyledChat, ChatMessages } from "./styled";
import { getMessages, getChatUsers } from "../../reduxThunk/selector/Friend";
import { currentUser } from "../../reduxThunk/selector/User";

export default function ChatPanel({
  chatRegime = true,
  fullscreen,
  setFullscreen,
  sidebarchat,
}) {
  //REDUX
  const myUser = useSelector(currentUser);
  const messages = useSelector(getMessages);
  const users = useSelector(getChatUsers);
  //REDUX
  const listRef = useRef();
  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = function () {
    listRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // ChatMessages;
  return (
    <StyledChat chatRegime={chatRegime} fullscreen={fullscreen}>
      <ChatMessages sidebarchat={sidebarchat}>
        {messages &&
          messages.map(({ type, _id, data, createdAt, owner }, index) => {
            console.log(users[owner]);
            return (
              <ChatMessage
                key={_id}
                date={new Date(createdAt).toLocaleString()}
                data={data}
                type={type}
                whose={owner === myUser._id ? "MY" : "OTHER"}
                nickname={users[owner][0].nickname}
                avatar={users[owner][0].avatar}
              />
            );
          })}
        <div style={{ float: "left", clear: "both" }} ref={listRef}></div>
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
