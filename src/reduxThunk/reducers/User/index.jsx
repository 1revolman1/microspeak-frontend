import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/User";
const initialValue = {
  data: {
    avatar: null,
    nickname: null,
    email: null,
  },
  isAuth: null,
  loader: false,
};
export const user = handleActions(
  {
    [action.login]: (draft, { payload }) => {
      draft.isAuth = payload.isAuth;
      draft.data.email = payload.email;
      draft.data.avatar = payload.avatar;
      draft.data.nickname = payload.nickname;
    },
    [action.logout]: (draft) => {
      draft.isAuth = false;
      draft.data.email = null;
      draft.data.avatar = null;
      draft.data.nickname = null;
    },
    [action.testAuthLoader]: (draft, { payload }) => {
      draft.loader = payload.loader;
    },
    [action.testAuthUser]: (draft, { payload }) => {
      draft.isAuth = payload.isAuth;
    },
  },
  initialValue
);
