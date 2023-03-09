import styled from "styled-components";

export const LoginFomrStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  .form {
    &__field {
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
    }
  }
`;
