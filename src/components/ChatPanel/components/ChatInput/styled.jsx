import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 5;
  width: 100%;
  padding: 10px 10%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 11px 11px 0px 0px;
  ${({ fullscreen, sidebarchat }) => {
    if (sidebarchat) {
      return css`
        position: initial;
      `;
    }
    if (fullscreen) {
      return css`
        height: 0;
        padding: 0;
        input {
          height: 0;
          padding: 0;
        }
      `;
    }
  }}
`;

export const StyledInput = styled.input`
  /* width: 80%; */

  width: 100%;
  margin: 0 auto;
  background: rgba(144, 0, 32, 0.3);
  border-radius: 10px;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  padding: 21px 25px 21px;
  color: #ffffff;
  &::placeholder {
    color: #ffffff;
  }
`;
