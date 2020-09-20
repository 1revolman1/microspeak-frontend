import React from "react";
import { useSelector } from "react-redux";
import { StyledSidebar, StyledMain } from "./styled";
import UserTab from "./components/UserTab";
import MenuNavigation from "./components/MenuNavigation";
import ChatPanel from "../ChatPanel";
import { currentUser } from "../../reduxThunk/selector/User";
import { Switch, Route } from "react-router-dom";

//PAGES
import Chats from "./pages/Chats";
import Contacts from "./pages/Contacts";
//PAGES

export default function Sidebar({ sidebarchat = false }) {
  //REDUX
  const MyData = useSelector(currentUser);
  //REDUX

  return (
    <StyledSidebar sidebarchat={sidebarchat}>
      {sidebarchat ? (
        <ChatPanel sidebarchat={sidebarchat} />
      ) : (
        <>
          <StyledMain>
            {MyData && (
              <UserTab type="USER" self={true} user={MyData} online={true} />
            )}
          </StyledMain>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
          <MenuNavigation />
        </>
      )}
    </StyledSidebar>
  );
}
