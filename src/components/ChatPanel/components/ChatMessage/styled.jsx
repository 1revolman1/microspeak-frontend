import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  margin-top: auto;
`;

export const StyledMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }
  ${({ whose }) =>
    whose === "MY" &&
    css`
      align-items: flex-end;
      > div {
        background: #deb3bc;
        border-radius: 10px 0px 10px 10px;
        img,
        video {
          border-radius: 10px 0px 10px 10px;
        }
      }
    `}
`;

export const StyledMessage = styled.div`
  position: relative;
  max-width: 40%;
  background: #900020;
  border-radius: 0px 10px 10px 10px;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & > video {
    position: relative;
  }

  ${({ type, whose }) => {
    if (type === "IMG") {
      return css`
        img {
          border-radius: 0px 10px 10px 10px;
        }
      `;
    }
    if (type === "MESSAGE") {
      return css`
        padding: 12px 17px 13px 23px;
      `;
    }
    if (type === "VIDEO") {
      return css`
        &:hover {
          background: red;
          svg[type="PAUSE"] {
            display: block;
          }
        }
        svg[type="PAUSE"] {
          display: none;
        }
        video {
          border-radius: 0px 10px 10px 10px;
        }
      `;
    }
  }}
`;

export const StyledImg = styled.div`
  width: 50px;
  margin: 0 5px;
  ${({ whose }) =>
    whose === "MY" &&
    css`
      display: none;
    `}
  img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
  }
`;
