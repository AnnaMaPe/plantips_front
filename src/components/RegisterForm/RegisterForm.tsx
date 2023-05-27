import { useState } from "react";
import { Button } from "../Button/Button";
import { FormStyled } from "../shared/FormStyled";
import useUser from "../../hooks/useUser/useUser";

export const RegisterForm = (): React.ReactElement => {
  const { registerUser } = useUser();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegisterDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await registerUser(registerData);
  };

  const isDisabled =
    registerData.email === "" ||
    registerData.username === "" ||
    registerData.password === "";

  return (
    <FormStyled onSubmit={onSubmitHandler}>
      <input
        className="form__field"
        placeholder="Username"
        type="text"
        autoComplete="off"
        name="username"
        aria-label="username"
        onChange={handleRegisterDataChange}
      />
      <input
        className="form__field"
        placeholder="E-mail"
        type="email"
        autoComplete="off"
        name="email"
        aria-label="email"
        onChange={handleRegisterDataChange}
      />
      <input
        className="form__field"
        placeholder="Password"
        type="password"
        autoComplete="off"
        name="password"
        aria-label="passsword"
        onChange={handleRegisterDataChange}
      />
      <img
        src="../images/logoBig.webp"
        alt="Plantips logo"
        width={100}
        height={100}
      />
      <Button
        className="form__button"
        isDisabled={isDisabled}
        text="Register"
      />
    </FormStyled>
  );
};
