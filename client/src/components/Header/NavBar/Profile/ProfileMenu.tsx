import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gql, useMutation } from "@apollo/client";
import { toast } from "sonner";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(user: { email: $email, password: $password })
  }
`;

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const passwordRef = useRef<HTMLInputElement>(null);

  const [Content, _] = useTranslation("header");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      if (!email || !password || email.length === 0 || password.length === 0)
        throw { message: "Please complete all fields." };
      toast.loading("Loading");
      await login({ variables: { email, password } });
      while (loading === true);
      setTimeout(() => {
        toast.dismiss();
        console.log(data);
        toast.success(data?.login || "Login Success");
      }, 1000);
    } catch (err: any) {
      setTimeout(() => {
        toast.dismiss();
        setPassword("");
        console.log(err, loading, error);
        passwordRef?.current?.focus();
        toast.error(err?.message);
      }, 1000);
    }
  };
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
              name="password"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
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
          <button type="submit">{Content("navbar.profile.login")}</button>
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
