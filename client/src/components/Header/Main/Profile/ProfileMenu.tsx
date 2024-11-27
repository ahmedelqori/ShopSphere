import React, { ChangeEvent, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);
  return (
    <ContainerForm style={style}>
      <Form>
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
          <button>LOGIN</button>
          <p>Don’t have account</p>
          <button>CREATE ACCOUNT</button>
        </Buttons>
      </Form>
    </ContainerForm>
  );
};

export default ProfileMenu;
