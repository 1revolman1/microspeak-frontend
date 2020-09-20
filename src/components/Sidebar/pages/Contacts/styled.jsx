import styled from "styled-components";

export const StyledUsers = styled.section`
  flex: 1;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    outline: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
export const StyledMenu = styled.menu`
  padding: 0 12px;
  max-height: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
`;
