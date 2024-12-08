import { useState } from "react";
import { Main, Block, ChooseButton, HolderButtons } from "./Login.styled";
import Signin from "./Signin/Signin";

const Login = () => {
  const [loginForm, setLoginForm] = useState<Boolean>(true);

  return (
    <Main>
      <div className="container">
        <Block>
          <HolderButtons>
            <ChooseButton
              style={{
                borderBottom: loginForm ? "3px solid var(--color-button)" : "",
                color: loginForm ? "" : "#77878F",
              }}
              onClick={() => setLoginForm(true)}
            >
              Sign In
            </ChooseButton>
            <ChooseButton
              style={{
                borderBottom: !loginForm ? "3px solid var(--color-button)" : "",
                color: !loginForm ? "" : "#77878F",
              }}
              onClick={() => setLoginForm(false)}
            >
              Sign Up
            </ChooseButton>
          </HolderButtons>
          <Signin />
        </Block>
      </div>
    </Main>
  );
};

export default Login;
