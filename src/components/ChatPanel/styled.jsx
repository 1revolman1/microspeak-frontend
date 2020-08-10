import styled, { css } from "styled-components";

export const StyledChat = styled.div`
  position: relative;
  height: 52vh;
  background: yellow;
  transition: all 0.5s linear;
  ${({ fullscreen }) =>
    fullscreen === true &&
    css`
      height: 0vh;
    `}
`;
