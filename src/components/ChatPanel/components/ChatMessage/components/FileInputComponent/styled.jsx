import styled from "styled-components";

export const StyledFileLabel = styled.label`
  overflow: hidden;
  position: relative;
  label {
    width: 100%;
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    display: inline-block;
    overflow: hidden;
  }
`;
export const StyledInformationAboutFile = styled.div`
  & > div:first-of-type {
    padding: 12px 17px 13px 23px;
    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
    }
    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
    }
  }
  & > div:last-of-type {
    border-radius: 0px 0px 10px 10px;
    border-top: 5px solid white;
    p {
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
    }
  }
`;

export const StyledInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
