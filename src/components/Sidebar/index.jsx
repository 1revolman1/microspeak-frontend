import React from "react";
import { StyledSidebar, StyledMenu, StyledUsers, StyledMain } from "./styled";
import UserTab from "./components/UserTab";
import Searcher from "./components/Searcher";
import CreateChat from "./components/CreateChat";
import MenuNavigation from "./components/MenuNavigation";
import ChatPanel from "../ChatPanel";

const my = [
  {
    name: "Nina Kirova",
    avatar:
      "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  },
];

const users = [
  // {
  //   name: "Nina Kirova",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
  // {
  //   name: "Alex Kirova1",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
  // {
  //   name: "Mila Kirova2",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
  // {
  //   name: "Jane Kirova3",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
  // {
  //   name: "Marta Kirova4",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
  // {
  //   name: "Sofia Kirova5",
  //   avatar:
  //     "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
  // },
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

export default function Sidebar({ sidebarchat = false }) {
  return (
    <StyledSidebar sidebarchat={sidebarchat}>
      {sidebarchat ? (
        <ChatPanel sidebarchat={sidebarchat} />
      ) : (
        <>
          <StyledMain>
            {my.length > 0 && <UserTab self={true} user={my[0]} />}
            <Searcher />
          </StyledMain>
          <StyledUsers>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <UserTab
                    key={`id${index}`}
                    active={index === 2 ? true : false}
                    self={false}
                    user={user}
                  />
                );
              })}
          </StyledUsers>
          <StyledMenu>
            <CreateChat>
              <span> </span> Chat
            </CreateChat>
            <MenuNavigation links={links} />
          </StyledMenu>
        </>
      )}
    </StyledSidebar>
  );
}
