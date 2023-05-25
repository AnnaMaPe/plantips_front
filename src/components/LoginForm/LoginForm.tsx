import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { Button } from "../Button/Button";
import { FormStyled } from "../shared/FormStyled";

const LoginForm = (): JSX.Element => {
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

  const isDisabled = loginData.username === "" || loginData.password === "";

  return (
    <FormStyled className="form" onSubmit={onSubmitHandler}>
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
      <img
        src="../images/logoBig.webp"
        alt="Plantips logo"
        width={100}
        height={100}
      />
      <Button className="form__button" isDisabled={isDisabled} text="Log in" />
    </FormStyled>
  );
};

export default LoginForm;
