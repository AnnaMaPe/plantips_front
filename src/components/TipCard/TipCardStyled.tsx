import styled from "styled-components";

export const TipCardStyled = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  max-width: 100vw;
  max-height: 120px;

  .card {
    &__image {
      border-radius: 15px 0 0 15px;
    }
    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__text {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      font-family: ${(props) => props.theme.fonts.text};
    }

    & __title {
      font-size: 20px;
      font-weight: 700;
    }
    &__scientific-name {
      font-style: italic;
      font-size: 18px;
    }
    &__info {
      font-size: 17px;
    }

    &__info:first-letter {
      text-transform: capitalize;
    }
    &__icons {
      display: flex;
      justify-content: flex-end;
      gap: 38px;
    }
    &__icon {
      color: ${(props) => props.theme.palette.primary};
      font-size: 42px;
    }
  }
`;
