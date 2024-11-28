import styled from "styled-components";

export const Section = styled.nav`
  width: 100%;
  height: 88px;
  display: flex;
  padding: 0px 5px;
  align-items: center;
  background-color: var(--color-blue-dark);
`;

export const Container = styled.div`
  gap: 5rem;
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
  @media (width <= 768px) {
    gap: 10px;
  }
`;

export const Logo = styled.div`
  gap: 0.5em;
  align-items: center;
  color: var(--color-white);
  a {
    gap: 0.5em;
    display: flex;
    align-items: center;
    color: var(--color-white);
  }
  span {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const Search = styled.div`
  flex: 1;
  height: 48px;
  flex-shrink: 2;
  border-radius: 8px;
  justify-content: space-between;
  background-color: var(--color-white);
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    flex-shrink: 2;
    padding: 0 20px;
    font-weight: 400;
    font-size: 0.9rem;
    border-radius: 8px;
    color: var(--color-grey-dark);
  }
  img {
    padding: 10px 10px;
  }
  @media (width <= 768px) {
    display: none;
  }
`;

export const HiddenSearch = styled.img`
  color: white;
  width: 32px;
  height: 32px;
  display: none;
  @media (width <= 768px) {
    display: inline;
  }
`;

export const User = styled.div`
  gap: 1.5em;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: none;
  position: relative;
  @media (width <= 768px) {
    display: flex;
  }
  img {
    width: 48px;
    height: 48px;
  }
`;

export const HideMenu = styled.div`
  top: 150%;
  right: 10%;
  z-index: 3;
  display: flex;
  width: fit-content;
  border-radius: 5px;
  padding: 10px 40px;
  position: absolute;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background-color: var(--color-orange);
  a {
    color: var(--color-white);
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    padding: 10px 0;
    width: 100px;
    position: relative;
    &:hover {
      opacity: 0.5;
    }
    &:not(:last-child) {
      &::after {
        content: "";
        top: 100%;
        left: -40%;
        height: 1px;
        width: 180%;
        position: absolute;
        background-color: var(--color-white-light);
      }
    }
  }
  @media (width <= 768px) {
    display: flex;
  }
`;

export const Cart = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (width <= 768px) {
    display: none;
  }
  &:hover {
    margin-bottom: 5px;
  }
`;

export const TotalItems = styled.div`
  top: -8px;
  width: 25px;
  right: -10px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: var(--color-blue-dark);
  background-color: var(--color-white);
`;
export const Favorite = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (width <= 768px) {
    display: none;
  }
  &:hover {
    margin-bottom: 5px;
  }
`;
export const Profile = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (width <= 768px) {
    display: none;
  }
  &:hover {
    margin-bottom: 5px;
  }
`;
