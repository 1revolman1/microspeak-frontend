import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import UnreadMessages from "./components/UnreadMessages";
import { StyledChat, ChatMessages } from "./styled";

export default function ChatPanel({ fullscreen, setFullscreen }) {
  return (
    <StyledChat fullscreen={fullscreen}>
      <ChatMessages>
        <ChatMessage type="MESSAGE" whose="MY" />
        <ChatMessage type="MESSAGE" whose="OTHER" />
        <ChatMessage type="IMG" whose="OTHER" />
        <ChatMessage type="MESSAGE" whose="OTHER" />
        <ChatMessage type="VIDEO" whose="OTHER" />
        <UnreadMessages />
        <ChatMessage type="MESSAGE" whose="MY" />
        <ChatMessage type="IMG" whose="MY" />
        <ChatMessage type="IMG" whose="OTHER" />

        <ChatMessage type="VIDEO" whose="MY" />
      </ChatMessages>
      <ChatInput fullscreen={fullscreen} />
    </StyledChat>
  );
}
