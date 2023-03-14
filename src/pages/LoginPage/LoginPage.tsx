import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginPageStyled className="login">
      <img
        className="login__photo"
        src="../images/login_photo.webp"
        alt="Monstera plant"
        width="360"
        height="161"
      />
      <span className="login__introduction">welcome back to</span>
      <h1 className="login__title">PlanTips</h1>
      <span className="login_sub-title">
        Check the latest tips from our leafy community!
      </span>
      <LoginForm />
      <span className="login__info">need an account?</span>
    </LoginPageStyled>
  );
};

export default LoginPage;
