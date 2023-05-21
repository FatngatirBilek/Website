import React, { Component, createContext } from "react";

interface ThemeContextProps {
  dark: boolean;
  toggleDark: () => void;
}

const defaultState: ThemeContextProps = {
  dark: true,
  toggleDark: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultState);

const supportsDarkMode = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  dark: boolean;
}

class ThemeProvider extends Component<ThemeProviderProps, ThemeProviderState> {
  state: ThemeProviderState = {
    dark: true,
  };

  toggleDark = (): void => {
    let dark = !this.state.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    this.setState({ dark });
  };

  componentDidMount() {
    const dark = JSON.parse(localStorage.getItem("dark"));

    if (dark === false) {
      this.setState({ dark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
export { ThemeProvider };
