import { AddCircle } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ZooContext } from "../../../context/ZooContext";

export const AddZone = () => {
  const { generateId, onAddZone } = useContext(ZooContext);

  const [nameZone, setNameZone] = useState("");

  const onGetValueInput = (value: string) => {
    setNameZone(value);
  };

  const Add = () => {
    if (nameZone.trim().length <= 1) return;
    onAddZone(nameZone, generateId);
    setNameZone("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        marginTop: "40px",
        width: "50%",
      }}
    >
      <TextField
        label="Ingrese el nombre de la zona"
        variant="outlined"
        fullWidth
        onChange={(event) => onGetValueInput(event.target.value)}
        value={nameZone}
      />
      <Button
        size="small"
        sx={{
          color: "#FFF",
          width: "200px",
          borderRadius: "18px",
        }}
        variant="contained"
        startIcon={<AddCircle />}
        onClick={Add}
      >
        Agregar zona
      </Button>
    </Box>
  );
};
