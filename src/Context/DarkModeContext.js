import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function DarkModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const setColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={setColorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
