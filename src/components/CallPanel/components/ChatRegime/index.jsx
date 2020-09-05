import React from "react";
import { StyledChatRegimeContainer, StyledInformation } from "./styled";
import Button from "../../../Button";
import { ReactComponent as EndCall } from "../../../../assets/img/EndCall.svg";
import { ReactComponent as Camera } from "../../../../assets/img/Camera.svg";
import { ReactComponent as AddUser } from "../../../../assets/img/AddUser.svg";

export default function ChatRegime({ chatRegime, setChatRegime }) {
  return (
    <StyledChatRegimeContainer>
      <StyledInformation>
        <h2>Work Chat</h2>
        <p>4 participants</p>
      </StyledInformation>
      <StyledInformation>
        <Button src={<Camera />} type={"openCamera"} statu={true} />
        <Button
          toDo={() => setChatRegime(!chatRegime)}
          src={<EndCall />}
          type={"endcall"}
          statu={true}
        />
        <Button src={<AddUser />} type={"addUser"} statu={true} />
      </StyledInformation>
    </StyledChatRegimeContainer>
  );
}
