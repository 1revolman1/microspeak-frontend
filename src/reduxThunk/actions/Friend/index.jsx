import { createAction } from "redux-act";
import io from "socket.io-client";

//---------------------------initial data-----------------------
export const getInitialData = createAction("get initial data");

export const friendGetInitialData = (nickname) => async (dispatch) => {
  let response = await fetch("http://localhost:3001/api/user/initialdata", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });
  const socket = io("http://localhost:3001", {
    query: `nick=${nickname}`,
  });
  socketFunctionActions(socket);
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
    let response = await fetch("http://localhost:3001/api/user/findeusers", {
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
  let response = await fetch("http://localhost:3001/api/user/findeusers", {
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
  let response = await fetch("http://localhost:3001/api/user/chats", {
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

const socketFunctionActions = function socketAciton(socket) {
  socket.on("chat message", function (msg) {
    console.log(msg, "TEST");
  });
  window.socket = socket;
};
