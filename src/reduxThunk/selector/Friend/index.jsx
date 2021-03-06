import { createSelector } from "reselect";

export const getFriend = (state) => state.friend;

export const getUsers = createSelector(
  getFriend,
  ({ data: { users } }) => users
);
export const getChats = createSelector(
  getFriend,
  ({ data: { chats } }) => chats
);
export const isSomeChatSelected = createSelector(
  getFriend,
  ({ data: { selectedChatIndex } }) => selectedChatIndex
);
export const getChatsByIndex = createSelector(
  getFriend,
  ({ data: { chats, selectedChatIndex } }) => chats && chats[selectedChatIndex]
);
export const getSocket = createSelector(
  getFriend,
  ({ data: { socket } }) => socket
);
export const getMessages = createSelector(
  getFriend,
  ({ chat: { messages } }) => messages
);
export const getChatUsers = createSelector(
  getFriend,
  ({ chat: { users } }) => users
);
