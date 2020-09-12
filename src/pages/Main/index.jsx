import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";

export default function Main() {
  const [fullscreen, setFullscreen] = useState(false);
  const [chatRegime, setChatRegime] = useState(false);
  const [sidebarChat, setSidebarChat] = useState(false);
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
