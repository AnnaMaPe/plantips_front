import styled from "styled-components";

export const CreatePageStyled = styled.section`
  .create {
    &__text {
      color: ${(props) => props.theme.palette.primary};
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 18px;
      text-align: center;
      margin-bottom: 30px;
    }
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 60px;
      margin: 7px 0 14px 0;
    }
  }
`;
