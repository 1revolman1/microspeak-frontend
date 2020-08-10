import React from "react";
import {
  StyledCall,
  StyledUserIcon,
  StyledFriendIcons,
  StyledSpeakerIcon,
  StyledNavigation,
  StyledNavigationGroupIcon,
} from "./styled";

import { ReactComponent as Chart } from "./assets/Chat.svg";
import Button from "./components/Button";

export default function CallPanel() {
  return (
    <StyledCall>
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
        <StyledSpeakerIcon>
          <img
            src="https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg"
            alt="Your friend icon"
          />
        </StyledSpeakerIcon>
      </StyledFriendIcons>
      <StyledNavigation>
        <Button
          block={<Chart />}
          src={require("./assets/Chat.svg")}
          type={"default"}
          statu={true}
        />
        <StyledNavigationGroupIcon>
          <Button
            src={require("./assets/Speaker.svg")}
            type={"default"}
            statu={false}
          />
          <Button
            src={require("./assets/microphone.svg")}
            type={"default"}
            statu={false}
          />
          <Button
            src={require("./assets/NoCamera.svg")}
            type={"default"}
            statu={true}
          />
          <Button
            src={require("./assets/EndCall.svg")}
            type={"endcall"}
            statu={false}
          />
        </StyledNavigationGroupIcon>
        <Button src={require("./assets/FullScreen.svg")} type={"fullscreen"} />
      </StyledNavigation>
    </StyledCall>
  );
}
