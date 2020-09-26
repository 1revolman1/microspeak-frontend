// export const myServerLink = "http://localhost:3001";
export const myServerLink = "https://microspeak-backend.herokuapp.com";
//-------------------------friend------------------
export const friendInitDataLink = `${myServerLink}/api/user/initialdata`;
export const friendFindUserLink = `${myServerLink}/api/user/findeusers`;
export const friendCreateChatLink = `${myServerLink}/api/user/createchat`;
export const friendGetAllMyChatsFromServerLink = `${myServerLink}/api/user/chats`;

//-------------------------user--------------------
export const userLogoutLink = `${myServerLink}/logout`;
export const userRefreshTokenLink = `${myServerLink}/api/authentication/refresh-token`;
export const userAuthLink = `${myServerLink}/api/authentication/login`;
export const userRegistrationLink = `${myServerLink}/api/authentication/registration`;
