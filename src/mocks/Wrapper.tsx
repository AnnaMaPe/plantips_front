import { Provider } from "react-redux";
import { store } from "../store/index";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
