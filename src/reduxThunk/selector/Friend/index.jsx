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
