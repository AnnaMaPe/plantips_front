import styled from "styled-components";

const FormPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 20px;
  gap: 15px;
  text-align: center;
  font-weight: 400;
  min-height: 100%;
  padding-top: 100px;

  .login,
  .register {
    &__photo {
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fonts.titleFontSize};
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bolder;
    }
  }
`;

export default FormPageStyled;
