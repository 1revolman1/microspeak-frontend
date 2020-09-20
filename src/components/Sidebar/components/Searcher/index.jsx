import React from "react";
import { StyledInput, StyledDiv } from "./styled";
export default function Searcher({
  type,
  onInput = (e) => console.log(e.target.value),
}) {
  return (
    <StyledDiv>
      <StyledInput
        onInput={onInput}
        type="text"
        placeholder={`Search in ${type}`}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.2 14.4C6.32 14.4 4 12.08 4 9.2C4 6.32 6.32 4 9.2 4C12.08 4 14.4 6.32 14.4 9.2C14.4 12.08 12.08 14.4 9.2 14.4ZM9.2 4.8C6.76 4.8 4.8 6.76 4.8 9.2C4.8 11.64 6.76 13.6 9.2 13.6C11.64 13.6 13.6 11.64 13.6 9.2C13.6 6.76 11.64 4.8 9.2 4.8Z"
          fill="white"
        />
        <path
          d="M13.0728 12.5068L16.6648 16.0988L16.0992 16.6644L12.5072 13.0724L13.0728 12.5068Z"
          fill="white"
        />
      </svg>
    </StyledDiv>
  );
}
