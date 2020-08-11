import styled, { css } from "styled-components";

export const StyledChat = styled.section`
  position: relative;
  height: 52vh;
  background: white;
  transition: all 0.5s linear;
  ${({ fullscreen }) =>
    fullscreen === true &&
    css`
      height: 0vh;
      padding: 0;
      div {
        padding: 0;
      }
    `}
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  padding: 18px 10% 0;
  height: 80%;
  transition: all 0.5s linear;
  overflow-y: scroll;
`;
