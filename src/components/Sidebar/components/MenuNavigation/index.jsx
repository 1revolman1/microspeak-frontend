import React from "react";
import { StyledUl } from "./styled";
import { NavLink } from "react-router-dom";

const links = [
  { title: "Chats", img: require("../../assets/Chats.svg"), links: "/chats" },
  // {
  //   title: "Calls",
  //   img: require("../../assets/Phone.svg"),
  //   links: "/calls",
  // },
  {
    title: "Contacts",
    img: require("../../assets/Contacts.svg"),
    links: "/contacts",
  },
  // {
  //   title: "Notifications",
  //   img: require("../../assets/Notifications.svg"),
  //   links: "/notifications",
  // },
];

export default function MenuNavigation() {
  return (
    <StyledUl>
      {links.map(({ title, img, links }, index) => {
        return (
          <NavLink activeClassName="active" key={`id${index}`} to={links}>
            <img src={img} alt="img for links" />
            <span>{title}</span>
          </NavLink>
        );
      })}
    </StyledUl>
  );
}
