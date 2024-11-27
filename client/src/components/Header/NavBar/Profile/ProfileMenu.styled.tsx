import styled from "styled-components";

export const ContainerForm = styled.div`
  right: 0;
  top: 140%;
  width: 424px;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  justify-content: center;
  color: var(--color-grey);
  background-color: var(--color-white);
  border: 1px solid var(--color-white-light);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
  }
  div {
    flex-direction: column;
  }

  input {
    width: 360px;
    height: 44px;
    border: none;
    font-weight: 500;
    padding: 0px 20px;
    color: var(--color-grey);
    outline: 1px solid var(--color-white-light);
  }
  label {
    width: 100%;
    display: flex;
    margin: 10px 0;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--color-grey);
    justify-content: space-between;
  }
  a {
    color: var(--color-blue-light);
  }
  button {
    width: 360px;
    height: 44px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 20px;
    background-color: var(--color-orange);
    outline: 1px solid var(--color-orange);
  }
`;

export const Password = styled.div`
  position: relative;
  flex-direction: row;
  img {
    top: 30%;
    right: 5%;
    position: absolute;
  }
`;

export const Buttons = styled.div`
  gap: 10px;
  :first-child {
    margin-top: 10px;
  }
  :last-child {
    color: var(--color-orange);
    background-color: var(--color-white);
  }
  p {
    opacity: 1;
    position: relative;
    &::before {
      content: "";
      top: 50%;
      left: -75%;
      height: 1px;
      width: 100px;
      opacity: 0.5;
      position: absolute;
      background-color: var(--color-grey-light);
    }
    &::after {
      content: "";
      top: 50%;
      height: 1px;
      right: -75%;
      width: 100px;
      opacity: 0.5;
      position: absolute;
      background-color: var(--color-grey-light);
    }
  }
`;

