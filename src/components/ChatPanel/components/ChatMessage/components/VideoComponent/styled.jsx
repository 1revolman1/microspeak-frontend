import styled, { css } from "styled-components";

export const StyledVideoInterface = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent !important;
  ${({ pause }) => {
    if (pause === false) {
      return css`
        display: none;
      `;
    }
    if (pause === true) {
      return css`
        display: block;
      `;
    }
    // if (type === "IMG") {
    //   return css`
    //     img {
    //       border-radius: 0px 10px 10px 10px;
    //     }
    //   `;
    // }
    // if (type === "MESSAGE") {
    //   return css`
    //     padding: 12px 17px 13px 23px;
    //   `;
    // }
    // if (type === "VIDEO") {
    //   return css`
    //     video {
    //       border-radius: 0px 10px 10px 10px;
    //     }
    //   `;
    // }
  }}
`;
