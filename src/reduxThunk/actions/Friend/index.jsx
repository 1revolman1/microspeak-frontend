import { createAction } from "redux-act";
import {
  myServerLink,
  friendInitDataLink,
  friendFindUserLink,
  friendCreateChatLink,
  friendGetAllMyChatsFromServerLink,
} from "../../../service/routeLinks";

import io from "socket.io-client";

//---------------------------initial data-----------------------
export const getInitialData = createAction("get initial data");

export const friendGetInitialData = (nickname) => async (dispatch) => {
  let response = await fetch(friendInitDataLink, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });
  const socket = io(myServerLink, {
    query: `nick=${nickname}`,
  });
  socketSendMessage(socket, dispatch);
  if (response.status === 200) {
    let { chatArray, friendArray } = await response.json();
    dispatch(getInitialData({ chatArray, friendArray, socket }));
  }
};

//--------------------------find user on the web site-----------

export const findUser = createAction("find user in this web site");

export const friendFindUser = (user) => async (dispatch) => {
  console.log(user);
  if (user.length > 0) {
    let response = await fetch(friendFindUserLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({ text: user }),
    });
    if (response.status === 200) {
      let { users } = await response.json();
      dispatch(findUser({ users }));
    }
  } else {
    const users = [];
    dispatch(findUser({ users }));
  }
};

//-------------------------create new chat with a user---------------

export const createChat = createAction("create new chat with a user");

export const friendCreateChat = (user) => async (dispatch) => {
  console.log(user);
  let response = await fetch(friendCreateChatLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ text: user }),
  });
  if (response.status === 200) {
    let { users } = await response.json();
    dispatch(findUser({ users }));
  }
};

//----------------------find my chats------------------------------------
export const getMyChatsFromServer = createAction("get chats from server");

export const friendGetAllMyChatsFromServer = (user) => async (dispatch) => {
  console.log(user);
  let response = await fetch(friendGetAllMyChatsFromServerLink, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });
  if (response.status === 200) {
    let { chatArray } = await response.json();
    dispatch(getMyChatsFromServer({ chatArray }));
  }
};

//---------------------select my chat index------------------------------
export const selectUserChat = createAction("select chat with user");

export const friendSelectUserChat = (id) => async (dispatch) => {
  dispatch(selectUserChat({ id }));
};

//------------------action in socket------------------------------------
export const sendMessage = createAction("send message to selected chat");
export const receiveMessages = createAction(
  "receive chat message from backend"
);

export const friendSocketSendMessage = (message) => async (dispatch) => {
  console.log("MESSAGE IN ACTION", message);
  dispatch(sendMessage({ message }));
};

const socketSendMessage = function socketAction(socket, dispatch) {
  socket.on("initial chat data", function ([msg, users]) {
    // console.log("Get initial chat data", msg);
    dispatch(receiveMessages({ msg, users }));
  });
  socket.on("respond all chat messages from backend", function ([msg, users]) {
    // console.log("All messages from backend", msg);
    dispatch(receiveMessages({ msg, users }));
  });
};
