import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { currentUser } from "../../reduxThunk/selector/User";

export default function Main() {
  const [fullscreen, setFullscreen] = useState(false);
  const [chatRegime, setChatRegime] = useState(true);
  const [sidebarChat, setSidebarChat] = useState(false);
  const MyData = useSelector(currentUser);
  React.useEffect(() => {
    console.log(MyData.nickname);
    if (MyData.nickname) {
      const socket = io("http://localhost:3001", {
        query: `nick=${MyData.nickname}`,
      });
    }
  }, []);
  return (
    <App sidebarchat={sidebarChat}>
      {/* <CallPanel
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
      )} */}
    </App>
  );
}
