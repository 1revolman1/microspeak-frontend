import { createSelector } from "reselect";

export const getUser = (state) => state.user;

export const isAuth = createSelector(getUser, ({ isAuth }) => isAuth);
export const currentUser = createSelector(getUser, ({ data }) => data);
export const showLoader = createSelector(
  getUser,
  ({ loader, isAuth }) => loader
);

// export const isAuth = createSelector(
//   getUser,
//   ({ email, password }) => !!(email && password)
// );

// export const currentCard = (id) =>
//   createSelector(getUser, ({ creditCard }) => creditCard[id]);
