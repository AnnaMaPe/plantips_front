import { NavLink, Navigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useAppSelector } from "../../store/hooks";
import FormPageStyled from "../shared/FormPageStyled";
import { paths } from "../../routers/paths";

const RegisterPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={paths.slash} replace={true} />
  ) : (
    <FormPageStyled>
      <img
        className="register__photo"
        src="/images/register_photo.webp"
        alt="Calathea plant"
        width="360"
        height="161"
      />
      <span className="register__introduction">welcome to</span>
      <h1 className="register__title">PlanTips</h1>
      <span className="register_sub-title">Join our leafy community!</span>
      <RegisterForm />

      <NavLink className="register__info" to={paths.login}>
        Already have an account?
      </NavLink>
    </FormPageStyled>
  );
};

export default RegisterPage;
