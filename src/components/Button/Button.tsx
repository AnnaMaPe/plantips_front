import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  isDisabled: boolean;
}

export const Button = ({ text, isDisabled }: ButtonProps): JSX.Element => {
  return <ButtonStyled disabled={isDisabled}>{text}</ButtonStyled>;
};
