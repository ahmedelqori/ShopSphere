import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gql, useMutation } from "@apollo/client";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    createUser(user: { email: $email, password: $password }) {
      id
    }
  }
`;

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);

  const [Content, _] = useTranslation("header");

  const passwordRef = useRef<HTMLInputElement>(null);
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      await login({ variables: { email, password } });
    } catch (err: any) {
      setPassword("");
      passwordRef?.current?.focus();
    }
  };

  useEffect(() => {
    console.log(error?.message)
    if (data) {
      localStorage.setItem("_id", data.createUser.id);
    }
  }, [error, data]);

  return (
    <ContainerForm style={style}>
      <Form onSubmit={handleSubmit}>
        <h3>{Content("navbar.profile.signin")}</h3>
        <div>
          <label htmlFor="email">{Content("navbar.profile.email")}</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            style={{
              outline: error
                ? "1px solid var(--color-error)"
                : "1px solid var(--color-white-light)",
              borderRadius: "2px",
            }}
          />
        </div>
        <div>
          <label htmlFor="password">
            <span>{Content("navbar.profile.password")}</span>
            <a href="/forget-password">
              {Content("navbar.profile.forget_password")}
            </a>
          </label>
          <Password>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              style={{
                outline: error
                  ? "1px solid var(--color-error)"
                  : "1px solid var(--color-white-light)",
                borderRadius: "2px",
              }}
              ref={passwordRef}
            />
            <img
              src="/assets/icons/Eye.svg"
              alt="Show password"
              onClick={() => setShowPasssword(!showPassword)}
            />
          </Password>
        </div>
        <Buttons>
          <button type="submit" disabled={loading}>
            {loading ? "LOGGIN" : Content("navbar.profile.login")}
          </button>
          <p>{Content("navbar.profile.no_account")}</p>
          <Link to={"/login"}>
            <button>{Content("navbar.profile.create_account")}</button>
          </Link>
        </Buttons>
      </Form>
    </ContainerForm>
  );
};

export default ProfileMenu;
