import { PropsWithChildren } from "react";
import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  isDisabled?: boolean;
  children?: PropsWithChildren;
  action?: () => void;
}

export const Button = ({
  text,
  isDisabled,
  action,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} disabled={isDisabled}>
      {text}
    </ButtonStyled>
  );
};
