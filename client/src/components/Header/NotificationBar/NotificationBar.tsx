import { useState } from "react";
import {
  Section,
  BarContainer,
  LeftSide,
  LeftSideSpan,
  CenterField,
  CenterFieldSpan,
  RightSideButton,
  CloseButton,
} from "./NotificationBar.styled";
import { useTranslation } from "react-i18next";

const NotificationBar = () => {
  const [isClose, setIsClose] = useState(false);
  const [Content] = useTranslation("header");

  return (
    <Section style={{ display: isClose ? "none" : "flex" }}>
      <BarContainer className="container">
        <LeftSide>
          <LeftSideSpan>Black</LeftSideSpan>
          Friday
        </LeftSide>
        <CenterField>
          {Content("notification_bar.promotion.first")}
          <CenterFieldSpan>59%</CenterFieldSpan>
          {Content("notification_bar.promotion.last").toUpperCase()}
        </CenterField>
        <RightSideButton>
          {Content("notification_bar.button").toUpperCase()}
          <img src="/assets/icons/ArrowRight.svg"  alt="arrow"/>
        </RightSideButton>
      </BarContainer>
      <CloseButton onClick={() => setIsClose(true)}>X</CloseButton>
    </Section>
  );
};

export default NotificationBar;
