import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 20px;
  gap: 10px;
  text-align: center;
  font-weight: 400;

  .login {
    &__photo {
      min-width: 100vw;
      margin: -22px 20px 0 -20px;
      object-fit: cover;
    }
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fonts.titleFontSize};
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default LoginPageStyled;
