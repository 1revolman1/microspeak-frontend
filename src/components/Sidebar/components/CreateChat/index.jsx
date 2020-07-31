import React, { useState } from "react";
import { StyledButton } from "./styled";

export default function CreateChat({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
