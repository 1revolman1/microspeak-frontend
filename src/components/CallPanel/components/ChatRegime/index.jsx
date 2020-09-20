import React from "react";
import { StyledChatRegimeContainer, StyledInformation } from "./styled";
import Button from "../../../Button";
import { ReactComponent as EndCall } from "../../../../assets/img/EndCall.svg";
import { ReactComponent as Camera } from "../../../../assets/img/Camera.svg";
import { ReactComponent as AddUser } from "../../../../assets/img/AddUser.svg";
import { useSelector } from "react-redux";
import { getChatsByIndex } from "../../../../reduxThunk/selector/Friend";

export default function ChatRegime({ chatRegime, setChatRegime }) {
  //REDUX
  const ourChat = useSelector(getChatsByIndex);
  //REDUX
  if (ourChat) {
    return (
      <StyledChatRegimeContainer>
        <StyledInformation>
          <h2>{ourChat && ourChat.name}</h2>
          <p>{ourChat && ourChat.users.length} participants</p>
        </StyledInformation>
        <StyledInformation>
          {/* <Button src={<Camera />} type={"openCamera"} statu={true} /> */}
          {/* <Button
          toDo={() => setChatRegime(!chatRegime)}
          src={<EndCall />}
          type={"endcall"}
          statu={true}
        /> */}
          <Button src={<AddUser />} type={"addUser"} statu={true} />
        </StyledInformation>
      </StyledChatRegimeContainer>
    );
  } else return <></>;
}
