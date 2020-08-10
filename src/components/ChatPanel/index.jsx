import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";

import { StyledChat } from "./styled";

export default function ChatPanel({ fullscreen, setFullscreen }) {
  return (
    <StyledChat fullscreen={fullscreen}>
      <ChatMessage />
    </StyledChat>
  );
}
