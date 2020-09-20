import styled from "styled-components";

export const StyledSection = styled.section`
  /* position: relative; */
  display: flex;
  align-items: center;
  /* margin: 15px 0; */
  padding: ${(props) => (props.self ? 0 : "8px 12px")};
  background: ${(props) => (props.active ? "white" : "")};
`;

export const StyledIMGDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 65px;
  max-height: 65px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#900020" : "inherit")};
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
    bottom: -3px;
    right: 2px;
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
    color: ${(props) => (props.active ? "#900020" : "#ffffff")};
    /* color: #ffffff; */
  }
`;

export const StyledADDITIONDivDOTS = styled.div`
  /* position: relative; */
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
`;

export const StyledPopUp = styled.div`
  visibility: hidden;
  background: white;
  border-radius: 0px 4px 4px 0px;

  color: #fff;
  text-align: left;
  /* padding: 8px 0; */
  z-index: 1;
  height: fit-content;
  position: fixed;
  /* margin-left: -80px; */
  margin-left: -40px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #900020;

  > div {
    padding: 8px 17px;
    &:hover {
      background: #deb3bc;
      color: white;
    }
  }
  &.show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
