import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0 25px;

  svg {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 11px 11px 11px 37px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  border: 0;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: white;
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: white;
  }
`;
