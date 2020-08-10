import styled, { css } from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition:all 0.2s linear;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: auto;
    object-fit: cover;
  }
  ${(props) => {
    return (
      props.type === "default" &&
      props.status === true &&
      css`
        background: #787878;
      `
    );
  }}
  ${(props) => {
    return (
      props.type === "default" &&
      props.status === false &&
      css`
        background: white;
      `
    );
  }}
  ${(props) =>
    props.type === "endcall" &&
    props.status === true &&
    css`
      background: green;
      transform: rotate(130deg);
    `}
    ${(props) =>
      props.type === "endcall" &&
      props.status === false &&
      css`
        background: red;
        transform: rotate(0deg);
      `}
  ${(props) =>
    props.type === "fullscreen" &&
    css`
      background: transparent;
    `}
`;
