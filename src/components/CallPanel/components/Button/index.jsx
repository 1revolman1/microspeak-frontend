import React, { useState } from "react";
import { StyledButton } from "./styled";

export default function Button({ src, type, toDo, statu, block }) {
  const [status, setStatus] = useState(statu);
  return (
    <StyledButton
      type={type}
      status={status}
      onClick={(e) => setStatus(!status)}
    >
      {block}
      <img src={src} alt="It's functional button with svg"></img>
    </StyledButton>
  );
}
