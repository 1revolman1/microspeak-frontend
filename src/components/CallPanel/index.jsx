import React from "react";
import { StyledCall, StyledUserIcon, StyledFriendIcons } from "./styled";
export default function CallPanel() {
  return (
    <StyledCall>
      <StyledUserIcon>
        <img
          src="https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg"
          alt="Your user icon"
        />
      </StyledUserIcon>
      <StyledFriendIcons></StyledFriendIcons>
    </StyledCall>
  );
}
