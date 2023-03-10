import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { Button } from "../Button/Button";
import { LoginFormStyled } from "./LoginFormStyled";

export const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser(loginData);
  };

  return (
    <LoginFormStyled className="form" onSubmit={onSubmitHandler}>
      <input
        className="form__field"
        placeholder="Username"
        type="text"
        autoComplete="off"
        name="username"
        aria-label="username"
        onChange={handleLoginDataChange}
      />
      <input
        className="form__field"
        placeholder="Password"
        type="password"
        autoComplete="off"
        name="password"
        aria-label="password"
        onChange={handleLoginDataChange}
      />
      <img src="../logoBig.webp" alt="Plantip logo" width={100} height={100} />
      <Button isDisabled={true} text="Log in" />
    </LoginFormStyled>
  );
};
