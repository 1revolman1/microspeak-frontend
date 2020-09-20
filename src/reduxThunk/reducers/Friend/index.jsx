import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Friend";
const initialValue = {
  data: {
    users: null,
    chats: null,
    socket: null,
    selectedChatIndex: null,
  },
};
export const friend = handleActions(
  {
    //-----------INITIAL DATA-----------------
    [action.getInitialData]: (draft, { payload }) => {
      draft.data.chats = payload.chatArray;
      draft.data.users = payload.friendArray;
      draft.data.socket = payload.socket;
    },
    //-----------SELECT CHAT INDEX-----------
    [action.selectUserChat]: (draft, { payload }) => {
      const index = draft.data.chats.findIndex(
        (todo) => todo._id === payload.id
      );
      if (index !== -1 && draft.data.socket.connected) {
        draft.data.selectedChatIndex = index;
        draft.data.socket.emit("connect-to-channel", payload.id);
      }
    },
    //-----------FIND DATA--------------------
    [action.findUser]: (draft, { payload }) => {
      draft.data.users = payload.users;
    },
    [action.getMyChatsFromServer]: (draft, { payload }) => {
      draft.data.chats = payload.chatArray;
    },
  },
  initialValue
);
