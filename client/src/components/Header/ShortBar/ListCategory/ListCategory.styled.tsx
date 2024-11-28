import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 1;
  font-weight: 600;
  border-radius: 4px;
  color: var(--color-grey);
  opacity: 0.8;
  background-color: var(--color-white);
  z-index: 1;
  cursor: pointer;
`;

export const Li = styled.li`
  padding: 10px 20px;
  &:hover {
    background-color: var(--color-white-light);
  }
`;
