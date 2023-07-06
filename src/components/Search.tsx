import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ZooContext } from "../context/ZooContext";
import { Animals, Answer, Comments, DataZoo } from "../model/DataZoo";
import { TypeSearch } from "../model/EnumTypeSearch";

export const Search = () => {
  const { zoo } = useContext(ZooContext);

  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState(Object({}));
  const [type, setType] = useState("");

  const getValueInput = (value: string) => {
    setSearchText(value);
  };

  const onSearch = () => {
    console.log("Array a buscar:", zoo);
    let positionZone: number;
    let positionAnimal: number;
    let positionComment: number;
    let foundAnimal: Animals[] = [];
    let foundComment: Comments[] = [];
    let foundAnswer: Answer[] = [];

    let dataAnimal: { nameZone?: string; animals?: Animals[] } = {
      nameZone: "",
      animals: [],
    };

    let dataComment: {
      nameZone?: string;
      nameAnimal?: string;
      comments?: Comments[];
    } = {
      nameZone: "",
      nameAnimal: "",
      comments: [],
    };

    let dataAnswer: {
      nameZone?: string;
      nameAnimal?: string;
      nameComments?: string;
      answers?: Answer[];
    } = {
      nameZone: "",
      nameAnimal: "",
      nameComments: "",
      answers: [],
    };

    let foundZoo: DataZoo[] = zoo.filter((valueZoo, indexZoo) => {
      // console.log("Zona", valueZoo);
      // console.log("Posicion de la zona", indexZoo);
      if (foundAnimal.length === 0 && foundComment.length === 0) {
        positionZone = indexZoo;

        foundAnimal = zoo[indexZoo].animals.filter(
          (valueAnimal, indexAnimal) => {
            // console.log("Animal", valueAnimal);
            // console.log("Posicion del animal", indexAnimal);

            if (foundComment.length === 0 && foundAnswer.length === 0) {
              positionAnimal = indexAnimal;
              foundComment = zoo[indexZoo].animals[indexAnimal].comments.filter(
                (valueComment, indexComment) => {
                  // console.log("Comentario", valueComment);
                  // console.log("posicion comentario", indexComment);

                  if (foundAnswer.length === 0) {
                    positionComment = indexComment;

                    foundAnswer = zoo[positionZone]?.animals[
                      positionAnimal
                    ]?.comments[positionComment]?.answer.filter(
                      (valueAnswer, indexAnswer) => {
                        // console.log("Respuesta", valueAnswer);
                        // console.log("posicion de la respuesta", indexAnswer);

                        return valueAnswer.body
                          .toLowerCase()
                          .includes(searchText.toLowerCase());
                      }
                    );
                  }

                  // console.log("Consiguio la respuesta", foundAnswer.length);

                  return valueComment.body
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
            }
            return valueAnimal.nameAnimal
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }
        );
      }

      return valueZoo.nameZone.toLowerCase().includes(searchText.toLowerCase());
    });

    if (foundZoo.length > 0) {
      setResult(foundZoo);
      setType(TypeSearch.Zone);
      console.log(foundZoo);
    }

    if (foundAnimal.length > 0) {
      dataAnimal.nameZone = zoo[positionZone!].nameZone;
      dataAnimal.animals = foundAnimal;

      console.log(dataAnimal);

      setResult(dataAnimal);
      setType(TypeSearch.Animal);
    }

    if (foundComment.length > 0) {
      dataComment.nameZone = zoo[positionZone!].nameZone;
      dataComment.nameAnimal =
        zoo[positionZone!].animals[positionAnimal!].nameAnimal;
      dataComment.comments = foundComment;

      console.log(dataComment);

      setResult(dataComment);
      setType(TypeSearch.Comment);
    }

    if (foundAnswer?.length > 0) {
      dataAnswer.nameZone = zoo[positionZone!].nameZone;
      dataAnswer.nameAnimal =
        zoo[positionZone!].animals[positionAnimal!].nameAnimal;
      dataAnswer.nameComments =
        zoo[positionZone!].animals[positionAnimal!].comments[
          positionComment!
        ].body;
      dataAnswer.answers = foundAnswer;

      console.log(dataAnswer);

      setResult(dataAnswer);
      setType(TypeSearch.Answer);
    }

    if (
      foundZoo.length === 0 &&
      foundAnimal.length === 0 &&
      foundAnswer?.length === 0 &&
      foundComment.length === 0
    ) {
      setResult("No se encontraron resultados");
      setType(TypeSearch.Nofound);
    }

    setSearchText("");
  };

  const viewDataSearch = (type: string) => {
    switch (type) {
      case TypeSearch.Zone:
        return (
          <>
            {result.map((map: DataZoo) => (
              <p key={map.id}>Zona:{map.nameZone}</p>
            ))}
          </>
        );

      case TypeSearch.Animal:
        return (
          <>
            <p>Zona: {result.nameZone}</p>
            {result.animals.map((animal: Animals) => (
              <p key={animal.id}>Animal: {animal.nameAnimal}</p>
            ))}
          </>
        );

      case TypeSearch.Comment:
        return (
          <>
            <p>Zona: {result.nameZone}</p>
            <p>Animal: {result.nameAnimal}</p>
            {result.comments.map((comment: Comments) => (
              <p key={comment.id}>Comentarios:{comment.body}</p>
            ))}
          </>
        );

      case TypeSearch.Answer:
        return (
          <>
            <p>Zona: {result.nameZone}</p>
            <p>Animal: {result.nameAnimal}</p>
            <p>Cometario:{result.nameComments}</p>
            {result.answers.map((answers: Answer) => (
              <p key={answers.id}>Respuestas: {answers.body}</p>
            ))}
          </>
        );

      case TypeSearch.Nofound:
        return (
          <>
            <p>No se encontraron resultados</p>
          </>
        );

      case "":
        return <></>;
    }
  };

  return (
    <>
      <div className="mb-4">
        <div className="row">
          <div className="col-11">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar..."
              onChange={(event) => getValueInput(event.target.value)}
              value={searchText}
            />
          </div>
          <div className="col-1">
            <button onClick={onSearch} className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="mt-4">{viewDataSearch(type)}</div>
      </div>
    </>
  );
};
