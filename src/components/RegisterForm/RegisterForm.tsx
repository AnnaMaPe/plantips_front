import { Button } from "../Button/Button";

export const RegisterForm = (): React.ReactElement => {
  return (
    <form>
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
        placeholder="email"
        type="email"
        autoComplete="off"
        name="email"
        aria-label="email"
      />
      <input
        className="form__field"
        placeholder="Username"
        type="text"
        autoComplete="off"
        name="username"
        aria-label="username"
      />
      <img
        src="../images/logoBig.webp"
        alt="Plantips logo"
        width={100}
        height={100}
      />
      <Button className="form__button" text="Register" />
    </form>
  );
};
