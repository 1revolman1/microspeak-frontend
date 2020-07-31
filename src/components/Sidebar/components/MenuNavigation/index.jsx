import React, { useState } from "react";
import { StyledUl } from "./styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

export default function MenuNavigation({ links }) {
  return (
    <StyledUl>
      {links.map(({ title, img, links }, index) => {
        return (
          <Link key={`id${index}`} to={links}>
            <img src={img} alt="img for links" />
            <span>{title}</span>
          </Link>
        );
      })}
      {/* <p>fgsfdsfds</p> <p>fgsfdsfds</p>
      <p>fgsfdsfds</p> <p>fgsfdsfds</p> <p>fgsfdsfds</p> <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p>
      <p>fgsfdsfds</p> */}
    </StyledUl>
  );
}
