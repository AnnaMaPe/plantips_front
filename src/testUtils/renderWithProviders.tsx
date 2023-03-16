import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};
