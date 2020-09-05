import styled, { css } from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all 0.2s linear;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: auto;
    object-fit: cover;
    path,
    g {
      transition: all 0.2s linear;
    }
  }
  ${(props) => {
    return (
      props.type === "default" &&
      props.status === true &&
      css`
        background: #787878;
        svg {
          path,
          g {
            fill: white;
          }
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.type === "default" &&
      props.status === false &&
      css`
        background: white;
        svg {
          path,
          g {
            fill: black;
          }
        }
      `
    );
  }}
  ${(props) =>
    props.type === "openCamera" &&
    css`
      background: #ffffff;
    `}
  ${(props) =>
    props.type === "endcall" &&
    props.status === true &&
    css`
      background: #ffffff;
      transform: rotate(130deg);
      svg {
        path {
          fill: #900020;
        }
      }
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
    ${(props) =>
    props.type === "addUser" &&
    css`
      background: #ffffff;
    `}
`;
