import { Navigate } from "react-router-dom";
import { paths } from "../../routers/paths";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({
  element,
}: ProtectedRouteProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);

  return token ? element : <Navigate to={paths.login} replace={true} />;
};
