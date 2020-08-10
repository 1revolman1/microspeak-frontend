import styled, { css } from "styled-components";

export const StyledCall = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 48vh;
  background: rgba(144, 0, 32, 0.3);
  padding: 21px 12px;
  transition: all 0.5s linear;
  ${({ fullscreen }) =>
    fullscreen === true &&
    css`
      height: 100vh;
    `}
`;

export const StyledUserIcon = styled.div`
  height: 65px;
  width: 65px;
  margin-left: auto;
  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const StyledFriendIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledSpeakerIcon = styled.div`
  height: 156px;
  width: 156px;
  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .chat-manipulator {
    position: relative;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #787878;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: auto;
      object-fit: cover;
    }
  }
  .full-screen {
    position: relative;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: transparent;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 23px;
      /* width: 5
      w0%; */
      height: auto;
      object-fit: cover;
    }
  }
`;

export const StyledNavigationGroupIcon = styled.div`
  display: flex;
  div {
    /* margin: 0 2.5%; */
  }
`;
