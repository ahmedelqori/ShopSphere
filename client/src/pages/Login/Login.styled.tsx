import styled from "styled-components";

export const Main = styled.main`
  color: var(--color-grey);
  font-family: "Public Sans", sans-serif;
  margin: 100px 0;
`;

export const Block = styled.div`
  width: 424px;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid var(--color-white-light);
  flex-direction: column;
`;

export const HolderButtons = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const ChooseButton = styled.button`
  outline: none;
  border: none;
  flex: 1;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: white;
  padding: 22px 0px;
`;
