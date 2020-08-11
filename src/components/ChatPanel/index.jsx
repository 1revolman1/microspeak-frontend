import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import { StyledChat } from "./styled";

export default function ChatPanel({ fullscreen, setFullscreen }) {
  return (
    <>
      <StyledChat fullscreen={fullscreen}>
        <ChatMessage whose="MY" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="OTHER" />
        <ChatMessage whose="MY" />
      </StyledChat>
      <ChatInput fullscreen={fullscreen} />
    </>
  );
}
