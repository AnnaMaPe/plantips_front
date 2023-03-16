import styled from "styled-components";

export const NavBarStyled = styled.nav`
  min-width: 100 wv;
  display: flex;
  justify-content: space-between;

  .nav {
    &__icon {
      height: 40px;
      width: 40px;
      color: ${(props) => props.theme.palette.primary};
    }
  }
`;
