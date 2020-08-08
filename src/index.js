import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux";

import MainPage from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import SigupPage from "./pages/SigupPage";

import { AuthLayout } from "./auth";

import PrivateRoute from "./auth/PrivateRoute";
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthLayout>
        <Router>
          {/* <nav style={{ position: "fixed", right: "0px" }}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={SigupPage} />
            {/* <Route path="/about" component={() => <h1>About</h1>} />
          <Route path="/users" component={() => <h1>Users</h1>} />
          <Route path="/">
            <h1>fsdfsdf</h1>
          </Route> */}
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
