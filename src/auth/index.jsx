import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState({});
  const onLogin = async (auth) => {
    let response = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    let json = await response.json();
    setIsAuthenticated(json.login);
    // return isAuthenticated;
  };
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
