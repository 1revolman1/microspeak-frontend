import React from "react";
import Sidebar from "../Sidebar";
import { StyledApp } from "./styled";

export default function App({ children }) {
  return (
    <>
      <Sidebar />
      <StyledApp> {children}</StyledApp>
    </>
  );
}
