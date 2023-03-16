import styled from "styled-components";

export const NavBarStyled = styled.nav`
  min-width: 100 wv;
  display: flex;
  justify-content: space-between;
  flex: 1;

  .nav {
    &__icon {
      height: 45px;
      width: 45px;
      color: ${(props) => props.theme.palette.primary};
    }
  }
`;
