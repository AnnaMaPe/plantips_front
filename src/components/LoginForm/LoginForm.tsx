import { useState } from "react";
import { useUser } from "../../hooks/useUser";
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
      <div className="form-information">
        <input
          className="form__field"
          placeholder="Username"
          type="text"
          autoComplete="off"
          name="username"
          onChange={handleLoginDataChange}
        ></input>
      </div>
      <div>
        <input
          className="form__field"
          placeholder="Password"
          type="password"
          autoComplete="off"
          name="password"
          onChange={handleLoginDataChange}
        ></input>
      </div>
      <img src="../logoBig.webp" alt="Plantip logo" width={100} height={100} />
      <button>Log in</button>
      <Button isDisabled={false} text="Sign up"></Button>
    </LoginFormStyled>
  );
};
