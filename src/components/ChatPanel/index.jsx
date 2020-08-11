import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import { StyledChat, ChatMessages } from "./styled";

export default function ChatPanel({ fullscreen, setFullscreen }) {
  return (
    <StyledChat fullscreen={fullscreen}>
      <ChatMessages>
        <ChatMessage whose="MY" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="MY" />
      </ChatMessages>
      <ChatInput fullscreen={fullscreen} />
    </StyledChat>
  );
}
