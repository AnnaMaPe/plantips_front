import styled from "styled-components";

export const DetailTipCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 20px;
  font-weight: 400;

  .detail {
    &__title {
      display: flex;
      flex-direction: column;
      gap: 2px;
      justify-content: center;
      align-items: center;
    }

    &__mainTitle {
      color: ${(props) => props.theme.palette.primary};
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 45px;
    }
    &__subTitle {
      color: ${(props) => props.theme.palette.primary};
      font-style: italic;
      margin-bottom: 15px;
    }
    &__image {
      border-radius: 30% 0 30% 0;
    }
    &__image-container {
      max-height: 350px;
      max-width: 350px;
      display: flex;
      margin: auto;
    }
    &__care {
      font-weight: bold;
      margin-top: 15px;
    }

    &__care:first-letter {
      text-transform: capitalize;
    }

    &__info {
      margin-top: 20px;
    }
  }

  .info {
    &__title {
      font-weight: 200;
      margin: 5px 0 5px 0;
      text-decoration: underline;
    }
    &__text {
      margin-bottom: 10px;
    }
    &__text:first-letter {
      text-transform: capitalize;
    }
  }
`;
