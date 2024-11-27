import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 52px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  background-color: var(--color-blue-dark);
`;

export const Container = styled.div`
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  font-size: 0.9rem;
  @media (width <= 532px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  gap: 3rem;
  align-items: center;
  p {
    @media (width <= 532px) {
      display: none;
    }
  }
  @media (width <= 532px) {
    gap: 0;
    flex: 1;
    justify-content: space-between;
  }
  @media (width <= 392px) {
    justify-content: end;
  }
`;

export const SocialMediaContainer = styled.div`
  gap: 1rem;
`;

export const LinksContainer = styled.div`
  gap: 1rem;
  @media (width <= 392px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  gap: 1rem;
  img {
    width: 12px;
    height: 12px;
  }
`;

export const OptionContainer = styled.div`
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
`;

export const HideOptions = styled.div`
  right: 0%;
  top: 140%;
  z-index: 2;
  width: 50px;
  padding: 5px 10px;
  text-align: start;
  position: absolute;
  border-radius: 3px;
  max-height: max-content;
  background-color: var(--color-blue-light);
`;

export const UnorderList = styled.ul`
  gap: 0.5rem;
  display: flex;
  max-height: 100px;
  flex-direction: column;
`;

export const List = styled.li`
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:hover {
    color: var(--color-yellow);
    border-bottom: 1px solid var(--color-blue-light);
  }
`;
