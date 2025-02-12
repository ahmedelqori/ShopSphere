import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = styled.div`
  gap: 1rem;
  top: 100%;
  right: 40px;
  width: 376px;
  z-index: 5;
  padding: 15px 0;
  font-size: 0.9rem;
  position: absolute;
  align-items: start;
  border-radius: 4px;
  flex-direction: column;
  color: var(--color-grey);
  background-color: var(--color-white);
  border: 1px solid var(--color-white-light);
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 20px;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 10px 20px;
`;

export const Li = styled.li``;

export const LinkContainer = styled(Link)`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

export const H4 = styled.h4`
  font-weight: 400;
  font-size: 0.9rem;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 2px;
`;
export const InfoContainer = styled.div`
  gap: 5px;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;
export const PriceContainer = styled.div`
  gap: 10px;
  span {
    color: var(--color-blue-light);
    font-weight: 500;
  }
`;

export const EmptyList = styled.div`
  font-size: 1.5rem;
  padding: 10px 0;
  align-self: center;
`;

export const ShowMore = styled.div`
  align-self: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--color-grey-light);
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey);
  opacity: 0.4;
  margin: 5px 0;
`;

export const Total = styled.div`
  padding: 10px 20px;
  justify-content: space-between;
  div {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const Buttons = styled.div`
  padding: 10px 20px;
  gap: 10px;
  flex-direction: column;
  button {
    width: 100%;
    padding: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--color-white);
    border: none;
    background-color: var(--color-orange);
    &:hover {
      opacity: 0.9;
    }
    &:hover:last-child {
      border: none;
      background-color: var(--color-orange);
      color: var(--color-white);
    }
    &:last-child {
      color: var(--color-orange);
      border: 1px solid var(--color-orange);
      background-color: var(--color-white);
    }
  }
`;
