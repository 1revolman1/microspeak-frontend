import React, { useState } from "react";
import { StyledButton } from "./styled";

export default function Button({
  src,
  type,
  toDo = () => console.log("Click"),
  finc,
  statu,
}) {
  const [status, setStatus] = useState(statu);
  return (
    <StyledButton
      type={type}
      status={status}
      onClick={(e) => {
        toDo();
        setStatus(!status);
      }}
    >
      {src}
    </StyledButton>
  );
}
