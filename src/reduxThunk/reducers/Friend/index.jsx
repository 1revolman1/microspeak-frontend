import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Friend";
const initialValue = {
  data: {
    users: null,
    chats: null,
    selectedChatIndex: null,
  },
};
export const friend = handleActions(
  {
    [action.findUser]: (draft, { payload }) => {
      draft.data.users = payload.users;
    },
    [action.getMyChatsFromServer]: (draft, { payload }) => {
      draft.data.chats = payload.chatArray;
    },
  },
  initialValue
);
