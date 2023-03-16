import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { NavBar } from "./NavBar";

const mockLogoutUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  logoutUser: mockLogoutUser,
}));

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 4 links to navigate to 'home', 'my tips', 'create tip' and 'log out'", () => {
      const home = /home/i;
      const myTips = /my tips/i;
      const createTip = /create tip/i;
      const logout = /log out/i;

      renderRouterWithProviders({}, <NavBar />);
      const homeLink = screen.getByRole("link", { name: home });
      const myTipsLink = screen.getByRole("link", { name: myTips });
      const createLink = screen.getByRole("link", { name: createTip });
      const logOutLink = screen.getByRole("link", { name: logout });

      expect(homeLink).toBeInTheDocument();
      expect(myTipsLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
      expect(logOutLink).toBeInTheDocument();
    });
  });

  describe("When the logout link ic clicked", () => {
    test("Then it should called the logout function", async () => {
      const logoutIcon = /log out/i;

      renderRouterWithProviders({}, <NavBar />);
      const logoutLink = screen.getByRole("link", { name: logoutIcon });

      await userEvent.click(logoutLink);

      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
