import styled from "styled-components";
export const StyledSidebar = styled.aside`
  padding: 21px 12px;
  height: 100%;
  width: 24.3%;
  max-width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #900020;
  overflow-x: hidden;
  padding-top: 20px;
  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    &:hover {
      color: #f1f1f1;
    }
    @media screen and (max-height: 450px) {
      font-size: 18px;
    }
  }
  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`;
