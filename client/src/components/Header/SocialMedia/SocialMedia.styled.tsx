import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: var(--color-blue-dark);
  height: 52px;
  padding: 0 5px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  font-size: .9rem;
`;

export const RightSide = styled.div`
  gap: 3rem;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  gap: 1rem;
`;

export const LinksContainer = styled.div`
  gap: 1rem;
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
  position: absolute;
  background-color: var(--color-blue-light);
  padding: 5px 10px;
  width: 100px;
  max-height: max-content;
  text-align: start;
  top: 140%;
  right: 0%;
  border-radius: 3px;
`;

export const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 100px;
`;

export const List = styled.li`
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 1px solid var(--color---color-blue-light);
    color: var(--color-yellow);
  }
`;
