import styled, { css } from "styled-components";

export const StyledChat = styled.section`
  display: flex;
  flex-direction: column;
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
  padding: 18px 10% 0;
  height: 80%;
  transition: all 0.5s linear;
  overflow-y: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;
