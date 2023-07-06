import { AddCircle } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ZooContext } from "../../../context/ZooContext";

type Props = {
  idZone: number;
};

export const AddAnimal = ({ idZone }: Props) => {
  const { generateId, onAddAnimal } = useContext(ZooContext);

  const [dataAnimal, setDataAnimal] = useState({
    nameAnimal: "",
    specie: "",
  });

  const Add = () => {
    if (
      dataAnimal.nameAnimal.trim().length <= 1 ||
      dataAnimal.specie.trim().length <= 1
    )
      return;
    onAddAnimal(dataAnimal.nameAnimal, dataAnimal.specie, generateId, idZone);
    setDataAnimal({ nameAnimal: "", specie: "" });
  };

  const getValueInput = (name: string, value: string) => {
    setDataAnimal((state) => ({ ...state, [name]: value }));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <TextField
          label="Nombre del animal"
          variant="outlined"
          onChange={(event) =>
            getValueInput(event.target.name, event.target.value)
          }
          name="nameAnimal"
          value={dataAnimal.nameAnimal}
        />

        <TextField
          label="Nombre de la especie"
          variant="outlined"
          name="specie"
          onChange={(event) =>
            getValueInput(event.target.name, event.target.value)
          }
          value={dataAnimal.specie}
        />

        <Button
          size="small"
          sx={{
            color: "#FFF",
            borderRadius: "18px",
          }}
          variant="contained"
          startIcon={<AddCircle />}
          onClick={Add}
        >
          Agregar animal
        </Button>
      </Box>

      {/* <div>
        <input
          className=""
          type="text"
          name="nameAnimal"
          placeholder="Ingrese nombre del animal..."
          onChange={(event) =>
            getValueInput(event.target.name, event.target.value)
          }
          value={dataAnimal.nameAnimal}
        />
        <input
          className="mt-4"
          type="text"
          name="specie"
          placeholder="Ingrese nombre de la especie..."
          onChange={(event) =>
            getValueInput(event.target.name, event.target.value)
          }
          value={dataAnimal.specie}
        />

        <div className="groupButton">
          <button className="mt-2" onClick={Add}>
            Agregar animal
          </button>
        </div>
      </div> */}
    </>
  );
};
