import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  flex-direction: column;
  padding: 22px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  div {
    width: 100%;
    gap: 10px;
  }
  input {
    width: 100%;
    height: 44px;
    padding: 20px;
    border: none;
    background-color: var(--color-white);
    outline: none;
    border: 1px solid var(--color-white-light);
    border-radius: 4px;
  }
`;

export const Password = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 10px;
    top: 25%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--color-button);
  border: none;
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 1px;
  border-radius: 4px;
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: start;
`;

export const ForgetPassword = styled.div`
  flex-direction: row;
  justify-content: space-between;
  a {
    color: var(--color-blue-light);
  }
`;

export const Options = styled.div`
  width: 100%;
  margin: 20px 0;
  button {
    width: 100%;
    height: 48px;
    background-color: var(--color-white);
    border: none;
    color: var(--color-gray);
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid var(--color-white-light);
  }
`;
