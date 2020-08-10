import React from "react";
import { StyledMessageContainer, StyledMessage } from "./styled";

export default function ChatMessage({ whose, date }) {
  return (
    <StyledMessageContainer whose={whose}>
      <span>14.28</span>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </StyledMessageContainer>
  );
}
