import React, { useState, useEffect, useReducer } from "react";
export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [data, setData] = useState({});
  const onLogin = async (auth) => {
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
    setIsAuthenticated(json.login);
  };
  const checkIfLogged = async () => {
    let response = await fetch(
      `http://localhost:3001/api/authentication/self`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    let json = await response.json();
    setIsAuthenticated(json.login);
  };
  useEffect(() => {
    checkIfLogged();
  }, []);
  //   const onLogin = async (email, password) => {
  //     // await firebase
  //     //     .auth()
  //     //     .setPersistence(firebase.auth.Auth.Persistence.SESSION);
  //     // await firebase
  //     //     .auth()
  //     //     .signInWithEmailAndPassword(email, password)
  //     //     .catch(function (error) {
  //     //         if (error) {
  //     //             const a = firebase
  //     //                 .auth()
  //     //                 .createUserWithEmailAndPassword(email, password);
  //     //         }
  //     //     });
  //     // setAuth(!!firebase.auth().currentUser);
  //   };

  //   const onLogout = () => {
  //     // firebase.auth().signOut();
  //     setAuth(false);
  //   };

  //   useEffect(() => {
  //     // let isMouth = true;
  //     // firebase.auth().onAuthStateChanged(() => {
  //     //     isMouth && setAuth(!!firebase.auth().currentUser);
  //     // });
  //     // return () => {
  //     //     isMouth = false;
  //     // };
  //   }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        data,
        onLogin,
        // onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
