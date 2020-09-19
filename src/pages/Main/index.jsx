import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../reduxThunk/selector/User";
import { getChats } from "../../reduxThunk/selector/Friend";
import { friendGetAllMyChatsFromServer } from "../../reduxThunk/actions/Friend";
import { useLocation } from "react-router-dom";

export default function Main() {
  //REDUX
  const dispatch = useDispatch();
  const MyData = useSelector(currentUser);
  // const Chats = useSelector(getChats);
  //REDUX
  const [fullscreen, setFullscreen] = useState(false);
  const [chatRegime, setChatRegime] = useState(true);
  const [sidebarChat, setSidebarChat] = useState(false);
  useEffect(() => {
    dispatch(friendGetAllMyChatsFromServer());
    if (MyData.nickname) {
      const socket = io("http://localhost:3001", {
        query: `nick=${MyData.nickname}`,
      });
      window.socket = socket;
    }
  }, []);
  return (
    <App sidebarchat={sidebarChat}>
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
    </App>
  );
}
