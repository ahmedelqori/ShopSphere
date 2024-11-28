import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterComp = styled.footer`
  bottom: 0%;
  width: 100%;
  font-weight: 500;
  font-size: 0.9rem;
  background-color: var(--color-grey);
  color: var(--color-footer-one);
  display: flex;
`;

export const Container = styled.div`
  height: 100%;
  width: 1320px;
  justify-content: center;
  align-items: center;
`;

export const TopSection = styled.div`
  padding: 80px 10px;
  display: grid;
  height: auto;
  justify-content: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: "contact category quick app tag";

  @media (width <= 1320px) {
    display: flex;
    gap: 40px;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Contact = styled.div`
  gap: 10px;
  height: 100%;
  grid-area: "contact";
  align-items: start;
  padding-right: 50px;
  flex-direction: column;
  @media (width <= 1320px) {
    padding-right: 10px;
    order: 5;
  }
  div {
    gap: 10px;
    margin-bottom: 20px;
    span {
      font-size: 2rem;
      color: var(--color-white);
    }
  }
  span {
    font-size: 1rem;
    color: var(--color-white);
  }
`;
export const TopCategory = styled.div`
  gap: 25px;
  height: 100%;
  align-items: start;
  grid-area: "category";
  flex-direction: column;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
  }
  ul {
    gap: 15px;
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      a {
        font-weight: 400;
        color: var(--color-footer-two);
      }
      :hover {
        padding-left: 10px;
        color: var(--color-white);
      }
    }
  }
  @media (width <= 1320px) {
    order: 2;
  }
`;

export const BrowserAll = styled(Link)`
  gap: 5px;
  display: flex;
  font-weight: 400;
  align-items: center;
  color: var(--color-yellow);
  @media (width <= 1320px) {
    order: 3;
  }
`;

export const QuickLinks = styled.div`
  gap: 25px;
  height: 100%;
  grid-area: "quick";
  align-items: start;
  grid-area: "category";
  flex-direction: column;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
  }
  ul {
    gap: 15px;
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      a {
        font-weight: 400;
        color: var(--color-footer-two);
      }
      :hover {
        padding-left: 10px;
        color: var(--color-white);
      }
    }
  }
  @media (width <= 1320px) {
    order: 3;
  }
`;
export const DownloadApp = styled.div`
  gap: 25px;
  height: 100%;
  grid-area: "app";
  align-items: start;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
  }
  ul {
    gap: 10px;
    display: flex;
    flex-direction: column;
    li {
      :hover {
        width: 101%;
      }
    }
  }
  @media (width <= 1320px) {
    order: 4;
  }
`;
export const PopularTag = styled.div`
  gap: 25px;
  height: 100%;
  grid-area: "tag";
  align-items: start;
  justify-self: end;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
  }
  @media (width <= 1320px) {
    order: 1;
  }
`;

export const UlTag = styled.ul`
  gap: 10px;
  display: flex;
  max-width: 320px;
  flex-wrap: wrap;
`;
export const LiTag = styled.li`
  padding: 5px;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 400;
  width: fit-content;
  border: 1px solid var(--color-footer-border);
  &:hover {
    background-color: var(--color-white);
    color: black;
    opacity: 0.8;
  }
`;
