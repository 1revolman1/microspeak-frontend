import React, { useRef } from "react";
import Searcher from "../../components/Searcher";
import CreateChat from "../../components/CreateChat";
import UserTab from "../../components/UserTab";
import { StyledUsers, StyledMenu } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../reduxThunk/selector/Friend";
import { friendFindUser } from "../../../../reduxThunk/actions/Friend";

export default function Chats() {
  const timer = useRef(null);
  //REDUX
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  //REDUX

  const onInput = function (event) {
    let text = event.target.value;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dispatch(friendFindUser(text));
    }, 3000);
  };
  return (
    <>
      <Searcher type="contacts" onInput={onInput} />
      <StyledUsers>
        {users &&
          users.map((user, index) => {
            if (user)
              return (
                <UserTab
                  type="USER"
                  key={`id${index}`}
                  self={false}
                  user={user}
                  online={user.isOnline}
                />
              );
            else return null;
          })}
      </StyledUsers>
      <StyledMenu>
        <CreateChat>
          <span> </span> Contacts
        </CreateChat>
        {/* <MenuNavigation /> */}
      </StyledMenu>
    </>
  );
}
