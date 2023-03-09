export const LoginForm = (): JSX.Element => {
  return (
    <form action="" className="form">
      <div className="form-information">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="email"
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          placeholder="email"
          autoComplete="off"
        ></input>
        <button className="form-button">Log in</button>
      </div>
    </form>
  );
};
