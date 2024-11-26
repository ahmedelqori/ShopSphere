import styled from "styled-components";

export const Section = styled.section`
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
  padding: 10px 10px;
  border-radius: 2px;
  justify-content: space-between;
  background-color: var(--color-white);
  input {
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--color-grey-sky);
  }
`;

export const User = styled.div`
  justify-content: space-between;
  gap: 1.5em;
`;

export const Cart = styled.div`
  position: relative;
`;
export const Favorite = styled.div`
  position: relative;
`;
export const Profile = styled.div`
  position: relative;
`;