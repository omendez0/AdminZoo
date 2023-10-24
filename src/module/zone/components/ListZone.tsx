import { Box, Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { DataZoo } from "../../../model/DataZoo";

type Props = {
  data: DataZoo;
  count: number;
  viewZone: (value: DataZoo) => void;
};

export const ListZone = ({ data, viewZone, count }: Props) => {
  const getSelectZone = () => {
    viewZone(data);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "12px",
          padding: "16px 28px",
        }}
        elevation={2}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="button"
            onClick={getSelectZone}
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              cursor: "pointer",
              textTransform: "capitalize",
              fontSize: "1.2rem",
            }}
          >
            {data.nameZone}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              opacity: 0.8,
            }}
          >
            Cantidad de animales:{" " + count}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
