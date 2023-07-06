import { Box, Card, CardContent, Typography } from "@mui/material";

type Props = {
  children: JSX.Element | JSX.Element[];
};
export const ContentSearch = ({ children }: Props) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
        }}
      >
        Resultados de la busqueda
      </Typography>
      <Card
        sx={{
          width: "fit-content",
          borderRadius: "12px",
          marginTop: "10px",
        }}
        elevation={3}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};
