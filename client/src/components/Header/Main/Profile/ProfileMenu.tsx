import React, { ChangeEvent, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };
  return (
    <ContainerForm style={style}>
      <Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
        <h3>Sign in to your account</h3>
        <div>
          <label htmlFor="email">Email Address</label>
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
            <span>Password</span>
            <a href="/forget-password">Forget Password?</a>
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
          <button type="submit">LOGIN</button>
          <p>Don’t have account</p>
          <Link to={"/login"}>
            <button>CREATE ACCOUNT</button>
          </Link>
        </Buttons>
      </Form>
    </ContainerForm>
  );
};

export default ProfileMenu;
