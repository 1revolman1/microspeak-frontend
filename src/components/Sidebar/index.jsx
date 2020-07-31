import React from "react";
import { StyledSidebar } from "./styled";
import UserTab from "./components/UserTab";
import Searcher from "./components/Searcher";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <UserTab self={true} />
      <Searcher />
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </StyledSidebar>
  );
}
