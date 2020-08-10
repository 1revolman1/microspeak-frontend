import React, { useState } from "react";
import {
  StyledCall,
  StyledUserIcon,
  StyledFriendIcons,
  StyledSpeakerIcon,
  StyledNavigation,
  StyledNavigationGroupIcon,
} from "./styled";

import { ReactComponent as Chart } from "./assets/Chat.svg";
import { ReactComponent as Speaker } from "./assets/Speaker.svg";
import { ReactComponent as Microphone } from "./assets/microphone.svg";
import { ReactComponent as NoCamera } from "./assets/NoCamera.svg";
import { ReactComponent as EndCall } from "./assets/EndCall.svg";
import { ReactComponent as FullScreen } from "./assets/FullScreen.svg";

import Button from "./components/Button";

export default function CallPanel({ fullscreen, setFullscreen }) {
  return (
    <StyledCall fullscreen={fullscreen}>
      <StyledUserIcon>
        <img
          src="https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg"
          alt="Your user icon"
        />
      </StyledUserIcon>
      <StyledFriendIcons>
        <StyledSpeakerIcon>
          <img
            src="https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg"
            alt="Your friend icon"
          />
        </StyledSpeakerIcon>
      </StyledFriendIcons>
      <StyledNavigation>
        <Button src={<Chart />} type={"default"} statu={true} />
        <StyledNavigationGroupIcon>
          <Button src={<Speaker />} type={"default"} statu={false} />
          <Button src={<Microphone />} type={"default"} statu={false} />
          <Button src={<NoCamera />} type={"default"} statu={true} />
          <Button src={<EndCall />} type={"endcall"} statu={false} />
        </StyledNavigationGroupIcon>
        <Button
          toDo={(e) => setFullscreen(!fullscreen)}
          src={<FullScreen />}
          type={"fullscreen"}
        />
      </StyledNavigation>
    </StyledCall>
  );
}
