import styled from "styled-components";

export const StyledChatRegimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const StyledInformation = styled.div`
  h2 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #900020;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  &:last-of-type {
    display: flex;
    > div {
      margin: 0 12px;
    }
  }
`;
