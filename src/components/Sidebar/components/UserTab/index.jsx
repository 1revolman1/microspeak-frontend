import React, { useState, useRef } from "react";
// import { ReactComponent as Circle } from "./assets/Circle.svg";
import {
  StyledSection,
  StyledIMGDiv,
  StyledDATADiv,
  StyledADDITIONDivDOTS,
  StyledADDITIONDivGEARS,
  StyledPopUp,
} from "./styled";

export default React.memo(function UserTab({
  type,
  self,
  user,
  active,
  online,
  onClick = () => console.log("click"),
}) {
  const [activePopUp, setActivePopUp] = useState(false);
  const refToDots = useRef(null);
  const popUpRef = useRef(null);
  const typeOFState = {
    online: "#25CC49",
    offline: "#E00707",
    DND: "#F7E015",
  };
  return (
    <StyledSection self={self} active={active} onClick={onClick}>
      <StyledIMGDiv active={active}>
        <img src={user.avatar} alt="avatar of user" />
        {type === "USER" && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="5"
              cy="5"
              r="4.75"
              fill={
                online && online
                  ? typeOFState["online"]
                  : typeOFState["offline"]
              }
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        )}
      </StyledIMGDiv>
      <StyledDATADiv active={active}>
        <h3>{user.nickname || user.name}</h3>
      </StyledDATADiv>
      {!self && type === "USER" && (
        <StyledADDITIONDivDOTS ref={refToDots} active={active}>
          <svg
            width="25"
            height="5"
            viewBox="0 0 25 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              const { top, left } = refToDots.current.getBoundingClientRect();
              popUpRef.current.style.top = `${
                top - popUpRef.current.offsetHeight
              }px`;
              popUpRef.current.style.left = `${
                left + popUpRef.current.offsetWidth / 2
              }px`;
              setActivePopUp(!activePopUp);
            }}
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
            <circle cx="12.5" cy="2.5" r="2.5" fill="white" />
            <circle cx="22.5" cy="2.5" r="2.5" fill="white" />
          </svg>
          <StyledPopUp
            ref={popUpRef}
            className={activePopUp ? "popuptext show" : "popuptext"}
          >
            <div>Create chat</div>
            <div>Add to contact</div>
            <div>Remove to contact</div>
          </StyledPopUp>
        </StyledADDITIONDivDOTS>
      )}
      {self && (
        <StyledADDITIONDivGEARS>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24571 6.51211C8.73277 6.46145 8.21671 6.57057 7.76819 6.82454C7.31967 7.07851 6.96061 7.4649 6.74017 7.93082C6.51973 8.39673 6.44869 8.91939 6.53678 9.42724C6.62486 9.9351 6.86777 10.4033 7.23223 10.7678C7.5967 11.1322 8.06491 11.3751 8.57276 11.4632C9.08061 11.5513 9.60327 11.4803 10.0692 11.2598C10.5351 11.0394 10.9215 10.6803 11.1755 10.2318C11.4294 9.78329 11.5386 9.26723 11.4879 8.7543C11.4301 8.17929 11.1754 7.64193 10.7667 7.23329C10.3581 6.82465 9.82072 6.56986 9.24571 6.51211V6.51211ZM15.2652 9C15.2636 9.27174 15.2437 9.54306 15.2055 9.81211L16.9715 11.1973C17.0484 11.261 17.1002 11.35 17.1177 11.4483C17.1352 11.5466 17.1173 11.648 17.0672 11.7344L15.3965 14.625C15.3458 14.7106 15.2664 14.7754 15.1725 14.8082C15.0786 14.841 14.9762 14.8396 14.8832 14.8043L13.1293 14.098C13.0326 14.0595 12.9278 14.0456 12.8244 14.0576C12.721 14.0695 12.6221 14.1069 12.5367 14.1664C12.269 14.3507 11.9878 14.5145 11.6953 14.6562C11.6034 14.7009 11.5238 14.7676 11.4638 14.8503C11.4037 14.933 11.3649 15.0292 11.3508 15.1305L11.0879 17.0012C11.0706 17.1 11.0196 17.1897 10.9435 17.255C10.8674 17.3204 10.771 17.3573 10.6707 17.3594H7.3293C7.23069 17.3577 7.13559 17.3224 7.05969 17.2594C6.98378 17.1965 6.9316 17.1095 6.91172 17.0129L6.64922 15.1449C6.63448 15.0426 6.59468 14.9454 6.53334 14.8621C6.47201 14.7789 6.39105 14.712 6.29766 14.6676C6.00556 14.5266 5.72523 14.3624 5.45938 14.1766C5.37426 14.1173 5.27574 14.0802 5.17271 14.0686C5.06967 14.0569 4.96535 14.0711 4.86915 14.1098L3.11563 14.8156C3.0227 14.851 2.92027 14.8525 2.82638 14.8197C2.73248 14.787 2.65315 14.7222 2.60235 14.6367L0.931647 11.7461C0.881417 11.6597 0.863468 11.5583 0.880993 11.46C0.898519 11.3616 0.950382 11.2727 1.02735 11.209L2.51993 10.0371C2.6017 9.9722 2.66597 9.88789 2.7069 9.79185C2.74782 9.6958 2.76412 9.59105 2.7543 9.48711C2.74024 9.32422 2.73165 9.16172 2.73165 8.99883C2.73165 8.83594 2.73985 8.67578 2.7543 8.51641C2.76305 8.4131 2.74595 8.30924 2.70456 8.21418C2.66317 8.11912 2.59878 8.03585 2.51719 7.97187L1.0254 6.8C0.949678 6.73597 0.898907 6.64734 0.881981 6.54964C0.865054 6.45194 0.883051 6.35139 0.932819 6.26562L2.60352 3.375C2.65426 3.28945 2.73357 3.22455 2.82747 3.19175C2.92137 3.15895 3.02383 3.16035 3.1168 3.1957L4.87071 3.90195C4.96743 3.94046 5.07219 3.95438 5.17561 3.94245C5.27903 3.93052 5.37788 3.89311 5.46329 3.83359C5.73096 3.64927 6.01224 3.48552 6.30469 3.34375C6.39664 3.29906 6.47616 3.23242 6.53625 3.14972C6.59634 3.06701 6.63514 2.97078 6.64922 2.86953L6.91212 0.998828C6.92938 0.900032 6.98042 0.810299 7.05652 0.744964C7.13261 0.679629 7.22903 0.642748 7.3293 0.640625H10.6707C10.7693 0.642331 10.8644 0.677578 10.9403 0.74056C11.0162 0.803542 11.0684 0.8905 11.0883 0.987109L11.3508 2.85508C11.3655 2.95745 11.4053 3.05459 11.4667 3.13787C11.528 3.22114 11.609 3.28798 11.7023 3.33242C11.9945 3.47342 12.2748 3.63762 12.5406 3.82344C12.6258 3.88266 12.7243 3.91978 12.8273 3.93144C12.9303 3.9431 13.0347 3.92894 13.1309 3.89023L14.8844 3.18438C14.9773 3.14899 15.0797 3.14753 15.1736 3.18026C15.2675 3.21299 15.3469 3.2778 15.3977 3.36328L17.0684 6.25391C17.1186 6.34027 17.1365 6.44165 17.119 6.54001C17.1015 6.63837 17.0496 6.72732 16.9727 6.79102L15.4801 7.96289C15.398 8.02759 15.3333 8.1118 15.292 8.20786C15.2508 8.30392 15.2342 8.40878 15.2438 8.51289C15.2566 8.67461 15.2652 8.83711 15.2652 9Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledADDITIONDivGEARS>
      )}
    </StyledSection>
  );
});
