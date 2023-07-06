import { Box } from "@mui/system";
import { useContext } from "react";
import { ZooContext } from "../../context/ZooContext";
import { AddZone } from "./components/AddZone";
import { ListZone } from "./components/ListZone";

export const Zone = () => {
  const { zoo, onSelectZone } = useContext(ZooContext);

  return (
    <>
      <AddZone></AddZone>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          marginTop: "30px",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {zoo.map((zoo) => (
          <ListZone
            key={zoo.id}
            count={zoo.animals.length}
            data={zoo}
            viewZone={onSelectZone}
          ></ListZone>
        ))}
      </Box>
    </>
  );
};
