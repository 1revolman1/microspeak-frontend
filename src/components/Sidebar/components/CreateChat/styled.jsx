import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background: #900020;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  span {
    background: white;
    height: 21px;
    width: 2px;
    position: relative;
    left: -15px;
    &:after {
      content: "";
      height: 2px;
      width: 21px;
      background: white;
      position: absolute;
      left: -9px;
      top: 10px;
    }
    /* font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 21px; */
  }
`;
