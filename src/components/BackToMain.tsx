import { Box, Typography } from "@mui/material";

type Props = {
  setTypeToBack: (value: string) => void;
};
export const BackToMain = ({ setTypeToBack }: Props) => {
  const toMain = () => {
    setTypeToBack("");
  };
  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          color: "primary.main",
          textDecoration: "underline",
        }}
        variant="button"
        onClick={toMain}
      >
        Regresar
      </Typography>
    </Box>
  );
};
