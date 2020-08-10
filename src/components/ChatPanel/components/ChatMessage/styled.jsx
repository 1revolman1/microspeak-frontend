import styled, { css } from "styled-components";

export const StyledMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  div {
    max-width: 40%;
    background: #900020;
    border-radius: 0px 10px 10px 10px;
    padding: 12px 17px 13px 23px;
    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
    }
  }
  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }
  ${({ whose }) =>
    whose === "OTHER" &&
    css`
      align-items: flex-end;
      div {
        background: #deb3bc;
        border-radius: 10px 0px 10px 10px;
      }
    `}
`;
export const StyledMessage = styled.div``;
