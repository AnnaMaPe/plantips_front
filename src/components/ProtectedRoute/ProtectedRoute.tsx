import { Navigate } from "react-router-dom";
import endpoints from "../../routers/endpoints";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({
  element,
}: ProtectedRouteProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);

  return token ? element : <Navigate to={endpoints.login} replace={true} />;
};
