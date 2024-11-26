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

const NotificationBar = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <Section style={{ display: isClose ? "none" : "flex" }}>
      <BarContainer className="container">
        <LeftSide>
          <LeftSideSpan>Black</LeftSideSpan>
          Friday
        </LeftSide>
        <CenterField>
          Up to
          <CenterFieldSpan>59%</CenterFieldSpan>
          OFF
        </CenterField>
        <RightSideButton>
          SHOP NOW <img src="/assets/icons/ArrowRight.svg" />
        </RightSideButton>
      </BarContainer>
      <CloseButton onClick={() => setIsClose(true)}>X</CloseButton>
    </Section>
  );
};

export default NotificationBar;
