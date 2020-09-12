import React from "react";
import Sidebar from "../Sidebar";
import { StyledApp } from "./styled";

export default function App({ sidebarchat, children }) {
  return (
    <>
      <Sidebar sidebarchat={sidebarchat} />
      <StyledApp> {children}</StyledApp>
    </>
  );
}
