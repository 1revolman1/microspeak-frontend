import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../reduxThunk/selector/User";
import { isSomeChatSelected } from "../../reduxThunk/selector/Friend";
import { friendGetInitialData } from "../../reduxThunk/actions/Friend";
import { useLocation, useHistory } from "react-router-dom";

export default function Main() {
  //REDUX
  const dispatch = useDispatch();
  const MyData = useSelector(currentUser);
  const selectedChat = useSelector(isSomeChatSelected);
  //REDUX
  const [fullscreen, setFullscreen] = useState(false);
  const [chatRegime, setChatRegime] = useState(true);
  const [sidebarChat, setSidebarChat] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") history.push("/chats");
  }, [location]);

  useEffect(() => {
    if (MyData.nickname) {
      dispatch(friendGetInitialData(MyData.nickname));
    }
  }, []);
  return (
    <App sidebarchat={sidebarChat}>
      {Number.isInteger(selectedChat) && (
        <>
          <CallPanel
            chatRegime={chatRegime}
            fullscreen={fullscreen}
            sidebarChat={sidebarChat}
            setFullscreen={setFullscreen}
            setChatRegime={setChatRegime}
            setSidebarChat={setSidebarChat}
          />
          {!sidebarChat && (
            <ChatPanel
              sidebarchat={sidebarChat}
              chatRegime={chatRegime}
              fullscreen={fullscreen}
              setFullscreen={setFullscreen}
            />
          )}
        </>
      )}
    </App>
  );
}
