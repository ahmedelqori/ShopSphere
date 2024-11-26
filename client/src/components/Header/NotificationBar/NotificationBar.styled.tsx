import styled from "styled-components";

export const Section = styled.section`
  height: 80px;
  display: flex;
  padding: 0px 5px;
  align-items: center;
  position: relative;
  background-color: var(--color-grey);
`;

export const CloseButton = styled.button`
  border: none;
  padding: 10px;
  color: var(--color-white);
  background-color: var(--color-grey-light);
`;

export const BarContainer = styled.div`
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  gap: 0.5rem;
  align-items: center;
  font-size: 24px;
`;

export const LeftSideSpan = styled.span`
  rotate: -3deg;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 10px;
  color: var(--color-grey);
  background-color: var(--color-yellow);
`;

export const CenterField = styled.div`
  gap: 0.5rem;
  align-items: center;
`;

export const CenterFieldSpan = styled.span`
  font-size: 2.55rem;
  font-weight: 600;
  color: var(--color-yellow);
`;

export const RightSideButton = styled.button`
  height: 48px;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 2px;
  align-items: center;
  letter-spacing: 1px;
  justify-content: center;
  border: 1px solid black;
  background-color: var(--color-yellow);
  width: 156px;

  &:hover {
    color: var(--color-white);
  }
`;
