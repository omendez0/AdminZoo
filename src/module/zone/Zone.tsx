import { Box } from "@mui/system";
import { useContext } from "react";
import { ZooContext } from "../../context/ZooContext";
import { AddZone } from "./components/AddZone";
import { ListZone } from "./components/ListZone";

export const Zone = () => {
  const { zoo, onSelectZone } = useContext(ZooContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AddZone />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "80px",
          gap: "16px",
          flexWrap: "wrap",
          width: "90%",
        }}
      >
        {zoo.map((zoo) => (
          <ListZone
            key={zoo.id}
            count={zoo.animals.length}
            data={zoo}
            viewZone={onSelectZone}
          />
        ))}
      </Box>
    </Box>
  );
};
