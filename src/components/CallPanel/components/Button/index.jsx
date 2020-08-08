import React, { useState } from "react";
import { StyledButton } from "./styled";

export default function Button({ src, type, toDo }) {
  const [status, setStatus] = useState(null);
  return (
    <StyledButton type={type}>
      <img src={src} alt="It's functional button with svg"></img>
    </StyledButton>
  );
}
