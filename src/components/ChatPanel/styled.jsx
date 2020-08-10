import styled, { css } from "styled-components";

export const StyledChat = styled.section`
  padding: 18px 10%;
  position: relative;
  height: 52vh;
  background: white;
  transition: all 0.5s linear;
  ${({ fullscreen }) =>
    fullscreen === true &&
    css`
      height: 0vh;
    `}
`;
