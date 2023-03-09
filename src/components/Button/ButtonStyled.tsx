import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.palette.primary};
  width: 220px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;

  :disabled {
    opacity: 50%;
  }
`;
