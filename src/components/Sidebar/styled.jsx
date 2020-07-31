import styled from "styled-components";
export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  /* padding-top: 10px; */
  padding: 15px 12px 0;
  height: 100%;
  width: 24.3%;
  max-width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #900020;
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

export const StyledMenu = styled.menu`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
`;

export const StyledUsers = styled.section`
  flex: 1;
  overflow-x: auto;
`;
export const StyledMain = styled.section``;
