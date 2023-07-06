import { Box } from "@mui/system";

type Props = {
  children: JSX.Element | JSX.Element[];
};
export const ContentTypeSearch = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
      }}
    >
      {children}
    </Box>
  );
};
