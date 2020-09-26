import { createAction } from "redux-act";
import * as UAParser from "ua-parser-js";
import Fingerprint2 from "fingerprintjs2";

export const login = createAction("login user in site");
export const registration = createAction("user registration on this server");
export const logout = createAction("logout user from site");
export const testAuthUser = createAction("test if user authorized");
export const testAuthLoader = createAction("show loader when tested auth");
const _getFingerprint = () => {
  return new Promise((resolve, reject) => {
    async function getHash() {
      const options = {
        excludes: {
          plugins: true,
          localStorage: true,
          adBlock: true,
          screenResolution: true,
          availableScreenResolution: true,
          enumerateDevices: true,
          pixelRatio: true,
          doNotTrack: true,
          preprocessor: (key, value) => {
            if (key === "userAgent") {
              const parser = new UAParser(value);
              // return customized user agent (without browser version)
              return `${parser.getOS().name} :: ${
                parser.getBrowser().name
              } :: ${parser.getEngine().name}`;
            }
            return value;
          },
        },
      };

      try {
        const components = await Fingerprint2.getPromise(options);
        const values = components.map((component) => component.value);
        return String(Fingerprint2.x64hash128(values.join(""), 31));
      } catch (e) {
        reject(e);
      }
    }

    setTimeout(async () => resolve(await getHash()), 500);
  });
};
const doesHttpOnlyCookieExist = (cookiename) => {
  var d = new Date();
  d.setTime(d.getTime() + 1000);
  var expires = "expires=" + d.toUTCString();

  document.cookie = cookiename + "=new_value;path=/;" + expires;
  if (document.cookie.indexOf(cookiename + "=") == -1) {
    return true;
  } else {
    return false;
  }
};

export const userLogout = () => async (dispatch) => {
  fetch("https://cleats.herokuapp.com/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  }).then((res) => dispatch(logout()));
};

export const testAuth = () => async (dispatch) => {
  const fingerprint = await _getFingerprint();
  console.log(fingerprint);
  let JWT = localStorage.getItem("JWT");
  let data = JSON.parse(localStorage.getItem("AboutUser"));
  if (JWT) {
    console.log("JWT");
    JWT = JWT.split(".")[1];
    let time = JSON.parse(atob(JWT)).exp;
    let auth = Math.floor(Date.now() / 1000) < time;
    if (!auth) {
      console.log("JWT REQUEST NON AUTH");
      let response = await fetch(
        "http://localhost:3001/api/authentication/refresh-token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fingerprint,
          }),
          credentials: "include",
        }
      );
      let json = await response.json();
      json.login && localStorage.setItem("JWT", json.accessToken);
      if (json.login) {
        dispatch(
          login({
            isAuth: json.login,
            email: json.data.email,
            avatar: json.data.avatar,
            nickname: json.data.nickname,
            _id: json.data._id,
          })
        );
      } else {
        dispatch(
          login({
            isAuth: json.login,
          })
        );
      }
    } else {
      console.log("JWT REQUEST NON AUTH ELSE");
      dispatch(
        login({
          isAuth: auth,
          email: data.email,
          avatar: data.avatar,
          nickname: data.nickname,
          _id: data._id,
        })
      );
    }
  } else if (doesHttpOnlyCookieExist("JWT")) {
    console.log("COOKIE EXIST");
    let response = await fetch(
      "http://localhost:3001/api/authentication/refresh-token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fingerprint,
        }),
        credentials: "include",
      }
    );
    let json = await response.json();
    json.login && localStorage.setItem("JWT", json.accessToken);
    dispatch(
      login({
        isAuth: json.login,
        email: json.data.email,
        avatar: json.data.avatar,
        nickname: json.data.nickname,
        _id: json.data._id,
      })
    );
  } else {
    console.log("ANYTHING");
    dispatch(
      login({ isAuth: false, email: null, avatar: null, nickname: null })
    );
  }
};

export const userLogin = (auth) => async (dispatch) => {
  const fingerprint = await _getFingerprint();
  let response = await fetch("http://localhost:3001/api/authentication/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ ...auth, fingerprint }),
  });
  let json = await response.json();
  if (json.login) {
    localStorage.setItem("JWT", json.accessToken);
    localStorage.setItem("AboutUser", JSON.stringify(json.data));
    dispatch(
      login({
        isAuth: true,
        email: json.data.email,
        avatar: json.data.avatar,
        nickname: json.data.nickname,
        _id: json.data._id,
      })
    );
  }
};
