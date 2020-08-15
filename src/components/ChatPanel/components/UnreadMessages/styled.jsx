import styled from "styled-components";

export const StyledUnread = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:before {
    content: "";
    width: 100%;
    border-bottom: solid 2px #deb3bc;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
  }
  span {
    background-color: white;
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 50px 0 50px;
    position: relative;
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #900020;
    font-size: 18px;
    line-height: 21px;
  }
`;
