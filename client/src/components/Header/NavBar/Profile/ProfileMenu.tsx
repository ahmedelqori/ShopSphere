import React, { ChangeEvent, useRef, useState } from "react";
import { ContainerForm, Form, Password, Buttons } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import apiClient from "../../../../hooks/api.hook";

interface ProfileMenuProps {
  style?: React.CSSProperties;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ style }) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [Content, _] = useTranslation("header");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPasssword] = useState<Boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please complete all fields.");
      return;
    }

    toast.loading("Loading...");

    try {
      // Send login request via apiClient
      const { data } = await apiClient.post("", {
        query: `
          mutation Login($email: String!, $password: String!) {
            login(user: { email: $email, password: $password }) {
              accessToken
            }
          }
        `,
        variables: { email, password },
      });

      if (data?.data?.login?.accessToken) {
        localStorage.setItem("accessToken", data.data.login.accessToken);
        toast.dismiss();
        toast.success("Login Success");
      } else {
        throw new Error("Login response does not contain an access token.");
      }
    } catch (err: any) {
      toast.dismiss();
      setPassword("");
      passwordRef?.current?.focus();
      toast.error(err?.message || "An error occurred during login.");
      console.error(err);
    }
  };

  const handleGetUsers = async () => {
    try {
      const { data } = await apiClient.post("", {
        query: `
          query GetUser {
            getUser
          }
        `,
      });
      if (data?.data?.getUser) {
        console.log("Fetched Users:", data.data.getUser);
        toast.success("Users fetched successfully.");
      }

      if (data?.errors) throw data.errors[0];
    } catch (error: any) {
      toast.error(error?.message || "Failed to fetch users.");
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
      <button onClick={handleGetUsers}>
        {Content("navbar.profile.create_account")}
      </button>
    </ContainerForm>
  );
};

export default ProfileMenu;
