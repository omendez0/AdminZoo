import { Box, Typography } from "@mui/material";
import { Answer } from "../../../../model/DataZoo";

type Props = {
  data: Answer;
};

export const CommentAnswer = ({ data }: Props) => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        marginLeft: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {data.author}:
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          {data.body}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "end",
            color: "#707070",
            opacity: "0.7",
            fontSize: "12px",
          }}
        >
          {data.date}
        </Typography>
      </Box>
    </Box>
  );
};
