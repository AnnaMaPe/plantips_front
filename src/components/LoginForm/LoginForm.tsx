import { LoginFomrStyled } from "./LoginFormStyled";

export const LoginForm = (): JSX.Element => {
  return (
    <LoginFomrStyled className="form">
      <div className="form-information">
        <input
          className="form__field"
          type="text"
          placeholder="Username"
          autoComplete="off"
        ></input>
      </div>
      <div>
        <input
          className="form__field"
          type="password"
          placeholder="Password"
          autoComplete="off"
        ></input>
      </div>
      <img src="../logoBig.webp" alt="Plantip logo" width={100} height={100} />
      <button className="form__button">Log in</button>
    </LoginFomrStyled>
  );
};
