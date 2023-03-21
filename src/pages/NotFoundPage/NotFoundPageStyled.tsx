import styled from "styled-components";

export const NotFoundPageStyled = styled.div`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.palette.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;

  .not-found {
    &__title {
      font-size: 100px;
    }
    &__subtitle {
      font-size: 40px;
    }
    &__text {
      font-size: 25px;
      margin-top: 30px;
    }
    &__link {
      text-decoration: underline;
    }
  }
`;
