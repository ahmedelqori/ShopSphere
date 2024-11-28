import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  color: black;
  padding: 0 5px;
  font-weight: 500;
  font-size: 0.9rem;
  @media (width <= 768px) {
    height: 50px;
  }
`;

export const Container = styled.div`
  justify-content: space-between;
`;

export const PhoneCall = styled.div`
    gap: 10px;
    align-items: center;
    @media (width <= 468px) {
      display: none;
    }
`;

export const Ul = styled.ul`
  gap: 30px;
  display: flex;
  padding: 20px 0px;
`;

export const Li = styled.li`
  gap: 5px;
  opacity: 0.8;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  &:first-child {
    opacity: 1;
    padding: 10px;
    font-weight: 600;
    border-radius: 4px;
    background-color: var(--color-white-light);
  }
  &:not(:first-child) {
    &:hover {
      opacity: 1;
    }
    @media (width <= 1024px) {
      display: none;
    }
  }
`;

export const CategoryMenu = styled.div`
  left: 0%;
  top: 140%;
  width: 240px;
  height: 420px;
  border-radius: 5px;
  position: absolute;
  background-color: var(--color-white);
  border: 2px solid var(--color-white-light);
`;
