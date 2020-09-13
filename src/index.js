import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import storeThunk from "./reduxThunk";

import MainPage from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import SigupPage from "./pages/SigupPage";
import Settings from "./pages/Settings";

import AuthLayout from "./auth/AuthLayout";

import PrivateRoute from "./auth/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeThunk}>
      <AuthLayout>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={SigupPage} />
            <PrivateRoute path="/settings" component={Settings} />
            <PrivateRoute path="/admin" component={() => <h1>Admin Page</h1>} />
            <PrivateRoute exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </AuthLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
