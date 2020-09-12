import styled, { css } from "styled-components";

export const StyledChat = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding-bottom: 57px; */
  /* height: 52vh; */
  min-height: 52vh;
  background: white;
  transition: all 0.5s linear;

  ${({ fullscreen, chatRegime, sidebarchat }) => {
    // if (chatRegime)
    //   return css`
    //     /* height: 91vh; */
    //   `;
    // if (sidebarchat)
    //   return css`
    //     overflow: auto;
    //   `;
    if (fullscreen)
      return css`
        padding: 0;
        /* transform: translate3d(0, 100%, 0); */
      `;
  }}
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 10% 0;
  height: 80%;
  transition: all 0.5s linear;
  /* overflow-y: auto; */
  ${({ sidebarchat }) => {
    if (sidebarchat)
      return css`
        * {
          max-width: inherit;
        }
      `;
  }}
  height: 100%;
  overflow: auto;
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
