import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  action?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const Button = ({
  text,
  isDisabled,
  action,
  icon,
  className,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      aria-label={ariaLabel}
      className={className}
      onClick={action}
      disabled={isDisabled}
    >
      {icon}
      {text}
    </ButtonStyled>
  );
};
