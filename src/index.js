import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/Main";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <nav>
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
        <Route path="/login" />
        <Route path="/about" component={() => <h1>About</h1>} />
        <Route path="/users" component={() => <h1>Users</h1>} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
