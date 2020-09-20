import React from "react";
import Searcher from "../../components/Searcher";
import CreateChat from "../../components/CreateChat";
import UserTab from "../../components/UserTab";
import { StyledUsers, StyledMenu } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  getChats,
  isSomeChatSelected,
} from "../../../../reduxThunk/selector/Friend";
import { friendSelectUserChat } from "../../../../reduxThunk/actions/Friend";
export default function Chats() {
  //REDUX
  const dispatch = useDispatch();
  const chats = useSelector(getChats);
  const selectedChat = useSelector(isSomeChatSelected);
  //REDUX
  return (
    <>
      <Searcher type="chats" />
      <StyledUsers>
        {chats &&
          chats.map((chat, index) => {
            if (chat)
              return (
                <UserTab
                  type="CHAT"
                  key={`id${index}`}
                  active={selectedChat === index}
                  self={false}
                  user={chat}
                  onClick={() => {
                    selectedChat !== index &&
                      dispatch(friendSelectUserChat(chat._id));
                  }}
                />
              );
            else return null;
          })}
      </StyledUsers>
      {/* <StyledMenu>
        <CreateChat>
          <span> </span> Chat
        </CreateChat>
      </StyledMenu> */}
    </>
  );
}
