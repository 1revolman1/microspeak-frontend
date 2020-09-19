import React from "react";
import { useSelector } from "react-redux";
import { StyledSidebar, StyledMenu, StyledUsers, StyledMain } from "./styled";
import UserTab from "./components/UserTab";
import Searcher from "./components/Searcher";
import CreateChat from "./components/CreateChat";
import MenuNavigation from "./components/MenuNavigation";
import ChatPanel from "../ChatPanel";
import { currentUser } from "../../reduxThunk/selector/User";
import { getUsers } from "../../reduxThunk/selector/Friend";
// const my = [
//   {
//     name: "Nina Kirova",
//     avatar:
//       "https://i.pinimg.com/originals/92/76/59/92765932dde11ac137b9c232812e153e.jpg",
//   },
// ];

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

export default function Sidebar({ sidebarchat = false }) {
  //REDUX
  const MyData = useSelector(currentUser);
  const users = useSelector(getUsers);
  //REDUX
  React.useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <StyledSidebar sidebarchat={sidebarchat}>
      {sidebarchat ? (
        <ChatPanel sidebarchat={sidebarchat} />
      ) : (
        <>
          <StyledMain>
            {MyData && <UserTab self={true} user={MyData} online={true} />}
            <Searcher />
          </StyledMain>
          <StyledUsers>
            {users &&
              users.map((user, index) => {
                if (user)
                  return (
                    <UserTab
                      key={`id${index}`}
                      active={index === 2 ? true : false}
                      self={false}
                      user={user}
                      online={user.isOnline}
                    />
                  );
                else return null;
              })}
          </StyledUsers>
          <StyledMenu>
            <CreateChat>
              <span> </span> Chat
            </CreateChat>
            <MenuNavigation />
          </StyledMenu>
        </>
      )}
    </StyledSidebar>
  );
}
