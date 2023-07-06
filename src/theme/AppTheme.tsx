import { ThemeProvider } from "@mui/material";
import { zooTheme } from "./zooTheme";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AppTheme = ({ children }: Props) => {
  return <ThemeProvider theme={zooTheme}>{children}</ThemeProvider>;
};
