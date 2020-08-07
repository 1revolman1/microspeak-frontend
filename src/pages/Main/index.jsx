import React from "react";
import Sidebar from "../../components/Sidebar";
import App from "../../components/App";
import CallPanel from "../../components/CallPanel";
import { StyledCall, StyledChat } from "./styled";
export default function Main() {
  return (
    <React.Fragment>
      <App>
        <CallPanel />
        <StyledChat />
      </App>
    </React.Fragment>
  );
}
