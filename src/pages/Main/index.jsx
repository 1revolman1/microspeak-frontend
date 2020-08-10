import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import ChatPanel from "../../components/ChatPanel";

export default function Main() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <App>
      <CallPanel fullscreen={fullscreen} setFullscreen={setFullscreen} />
      <ChatPanel fullscreen={fullscreen} setFullscreen={setFullscreen} />
    </App>
  );
}
