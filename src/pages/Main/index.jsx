import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";

export default function Main() {
  const [fullscreen, setFullscreen] = useState(false);
  const [chatRegime, setChatRegime] = useState(false);

  return (
    <App>
      <CallPanel
        chatRegime={chatRegime}
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        setChatRegime={setChatRegime}
      />
      <ChatPanel
        chatRegime={chatRegime}
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
      />
    </App>
  );
}
