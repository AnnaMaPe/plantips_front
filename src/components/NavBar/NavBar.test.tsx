import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { NavBar } from "./NavBar";

export {};
describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 4 links to navigate to 'home', 'my tips', 'create tip' and 'log out'", () => {
      const home = /home/i;
      const myTips = /my tips/i;
      const createTip = /create tip/i;
      const logOut = /log out/i;

      renderRouterWithProviders({}, <NavBar />);
      const homeLink = screen.getByRole("link", { name: home });
      const myTipsLink = screen.getByRole("link", { name: myTips });
      const createLink = screen.getByRole("link", { name: createTip });
      const logOutLink = screen.getByRole("link", { name: logOut });

      expect(homeLink).toBeInTheDocument();
      expect(myTipsLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
      expect(logOutLink).toBeInTheDocument();
    });
  });
});
