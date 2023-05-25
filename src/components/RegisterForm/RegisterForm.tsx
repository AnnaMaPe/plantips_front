import { Button } from "../Button/Button";
import { FormStyled } from "../shared/FormStyled";

export const RegisterForm = (): React.ReactElement => {
  return (
    <FormStyled>
      <input
        className="form__field"
        placeholder="Username"
        type="text"
        autoComplete="off"
        name="username"
        aria-label="username"
      />
      <input
        className="form__field"
        placeholder="E-mail"
        type="email"
        autoComplete="off"
        name="email"
        aria-label="email"
      />
      <input
        className="form__field"
        placeholder="Password"
        type="password"
        autoComplete="off"
        name="password"
        aria-label="passsword"
      />
      <img
        src="../images/logoBig.webp"
        alt="Plantips logo"
        width={100}
        height={100}
      />
      <Button className="form__button" text="Register" />
    </FormStyled>
  );
};
