import { ReactNode } from "react";
import { ThemeProvider } from "./theme";
import { AuthProvider } from "./auth";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default GlobalProvider;
