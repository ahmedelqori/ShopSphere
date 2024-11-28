import React, { ChangeEvent, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);
  const [Content, _] = useTranslation("header");

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };
  return (
    <ContainerForm style={style}>
      <Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
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
