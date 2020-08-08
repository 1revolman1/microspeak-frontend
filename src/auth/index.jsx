import * as UAParser from "ua-parser-js";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Fingerprint2 from "fingerprintjs2";
import styled from "styled-components";

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AuthContext = React.createContext();

export const _getFingerprint = () => {
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

export const AuthLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [data, setData] = useState({});
  const onLogin = async (auth) => {
    const fingerprint = await _getFingerprint();
    console.log(fingerprint);
    let response = await fetch(
      "http://localhost:3001/api/authentication/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(auth),
      }
    );
    let json = await response.json();
    localStorage.setItem("JWT", json.accessToken);
    setIsAuthenticated(json.login);
  };
  const checkIfLogged = async () => {
    const fingerprint = await _getFingerprint();
    console.log(fingerprint);
    let JWT = localStorage.getItem("JWT");
    if (JWT) {
      JWT = JWT.split(".")[1];
      let time = JSON.parse(atob(JWT)).exp;
      let auth = Math.floor(Date.now() / 1000) < time;
      console.log(time, Math.floor(Date.now() / 1000), auth);
      if (!auth) {
        console.log("NO AUTH", isAuthenticated);
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
        localStorage.setItem("JWT", json.accessToken);
        setIsAuthenticated(json.login);
      } else {
        setIsAuthenticated(auth);
      }
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkIfLogged();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        data,
        onLogin,
      }}
    >
      {isAuthenticated === null ? (
        <StyledLoader
          type="Puff"
          color="#900020"
          height={100}
          width={100}
          timeout={1000}
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
