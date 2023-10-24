import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { ZooContext } from "../../context/ZooContext";
import { AddZone } from "./components/AddZone";
import { ListZone } from "./components/ListZone";
import { getZones } from "../../services/zoneServices";

export const Zone = () => {
  const { zoo, onSelectZone } = useContext(ZooContext);

  const loadZone = async () => {
    const data = await getZones();
    console.log(data);
  };

  useEffect(() => {
    loadZone();
  }, []);

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
