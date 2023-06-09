import styled from "styled-components";

export const FilterStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  .filter {
    &__select {
      border-radius: ${(props) => props.theme.inputs.borderRadius};
      min-width: 90vw;
      background-color: ${(props) => props.theme.palette.secondary};
      height: 60px;
      padding: 20px;
      font-family: inherit;
      font-size: 18px;
      font-weight: 400;
      font-size: inherit;
      border: none;
      color: black;
      padding-left: 16px;
      border-right: 20px solid transparent;
      margin: 20px 0 10px 0;
    }
  }
`;
