import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const StyledIMGDiv = styled.div`
  position: relative;
  max-width: 65px;
  max-height: 65px;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }
  svg {
    position: absolute;
    bottom: 3px;
    right: 7px;
  }
`;
export const StyledDATADiv = styled.div`
  margin-left: 12px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    user-select: none;
    color: #ffffff;
  }
`;

const bias = "10px";
const color = "#FFFFFF";
export const StyledADDITIONDivDOTS = styled.div`
  position: relative;
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 12px;
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${color};
    &:before {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${color};
      right: ${bias};
      transition: right 0.3s ease-out;
    }
    &:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${color};
      left: 10px;
      transition: left 0.3s ease-out;
    }
  }
  &:hover {
    .dot:before {
      right: -${bias};
    }
    .dot:after {
      left: -${bias};
    }
  }
`;

export const StyledADDITIONDivGEARS = styled.div`
  margin-left: auto;
  svg {
    transition: transform 0.3s linear;
  }
  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }
`;
