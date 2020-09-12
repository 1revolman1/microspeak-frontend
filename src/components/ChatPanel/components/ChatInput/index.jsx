import React from "react";
import { StyledInput, StyledContainer } from "./styled";

export default function ChatMessage({ fullscreen, sidebarchat }) {
  return (
    <StyledContainer sidebarchat={sidebarchat} fullscreen={fullscreen}>
      <StyledInput type="text" placeholder="Enter your message"></StyledInput>
    </StyledContainer>
  );
}
