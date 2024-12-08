import { useRef, useState } from "react";
import {
  Section,
  Form,
  ForgetPassword,
  Column,
  Button,
  Password,
  Options,
} from "./Signin.styled";
import { toast } from "sonner";
import apiClient from "../../../hooks/api.hook";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

  const [hidePassword, setHidePassword] = useState<Boolean>(true);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please complete all fields.");
      return;
    }

    toast.loading("Loading...");

    try {
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
        console.log(data?.errors);
        throw data?.errors;
      }
    } catch (err: any) {
      toast.dismiss();
      setPassword("");
      passwordRef?.current?.focus();
      toast.error(err?.message || "An error occurred during login.");
    }
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Column>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Column>
        <Column>
          <ForgetPassword>
            <label htmlFor="password">Password</label>
            <a href="/forget-password">Forget Password</a>
          </ForgetPassword>
          <Password>
            <input
              ref={passwordRef}
              type={hidePassword ? "password" : "text"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src="/assets/icons/Eye.svg"
              alt="Show password"
              onClick={() => setHidePassword(!hidePassword)}
            />
          </Password>
        </Column>
        <Button type="submit">SIGN IN</Button>
      </Form>
      <Options>
        <button>Login With Google</button>
      </Options>
      <Options>
        <button>Login With Apple</button>
      </Options>
    </Section>
  );
};

export default Signin;
