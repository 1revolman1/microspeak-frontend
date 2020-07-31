import React from "react";
import { StyledSidebar, StyledMenu, StyledUsers } from "./styled";
import UserTab from "./components/UserTab";
import Searcher from "./components/Searcher";
import CreateChat from "./components/CreateChat";
import MenuNavigation from "./components/MenuNavigation";

const users = [
  {
    name: "Nina Kirova",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
  {
    name: "Alex Kirova1",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
  {
    name: "Mila Kirova2",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
  {
    name: "Jane Kirova3",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
  {
    name: "Marta Kirova4",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
  {
    name: "Sofia Kirova5",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
];
const links = [
  { title: "Chats", img: require("./assets/Chats.svg"), links: "/chat" },
  {
    title: "Calls",
    img: require("./assets/Phone.svg"),
    links: "/calls",
  },
  {
    title: "Contacts",
    img: require("./assets/Contacts.svg"),
    links: "/contacts",
  },
  {
    title: "Notifications",
    img: require("./assets/Notifications.svg"),
    links: "/notifications",
  },
];

export default function Sidebar() {
  console.log(links);
  return (
    <StyledSidebar>
      <UserTab self={true} user={users[0]} />
      <Searcher />
      <StyledUsers>
        {users.map((user, index) => {
          return <UserTab key={`id${index}`} self={false} user={user} />;
        })}
      </StyledUsers>
      <StyledMenu>
        <CreateChat>+ Chat</CreateChat>
        <MenuNavigation links={links} />
      </StyledMenu>
    </StyledSidebar>
  );
}
