import styled, { css } from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #787878;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: auto;
    object-fit: cover;
  }
  ${(props) =>
    props.type === "default" &&
    css`
      background: white;
      color: black;
    `}
  ${(props) =>
    props.type === "endcall" &&
    css`
      background: red;
    `}
  ${(props) =>
    props.type === "fullscreen" &&
    css`
      background: transparent;
    `}
`;
