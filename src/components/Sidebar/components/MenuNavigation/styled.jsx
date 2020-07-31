import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  overflow-x: auto;
  margin-top: 110px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0 17px;
    border-bottom: 4px solid transparent;
    &:hover {
      border-bottom: 4px solid white;
    }
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    span {
      margin: 4px 0;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
