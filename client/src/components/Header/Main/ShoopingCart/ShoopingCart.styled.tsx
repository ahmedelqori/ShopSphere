import styled from "styled-components";

export const Cart = styled.div`
  gap: 1rem;
  top: 100%;
  right: 0;
  width: 376px;
  font-size: 0.9rem;
  position: absolute;
  padding: 10px 20px;
  align-items: start;
  border-radius: 2px;
  flex-direction: column;
  color: var(--color-grey);
  background-color: var(--color-white);
  border: 1px solid var(--color-white-light);
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Li = styled.li`
  gap: 10px;
  display: flex;
  justify-content: space-between;
`;

export const H4 = styled.h4`
  font-weight: 400;
  font-size: 0.9rem;
`;

export const ItemImage = styled.img`
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
