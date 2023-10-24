import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animals, DataZoo } from "../model/DataZoo";
import { ZooContext } from "./ZooContext";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ZooProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const generateId = new Date().getUTCMilliseconds();
  const [positionZone, setpositionZone] = useState(0);
  const [idZone, setIdZone] = useState(0);

  const [zoo, setZoo] = useState<Array<DataZoo>>([]);

  const onAddZone = (newZone: string, idZone: number): void => {
    setZoo((zoo) => [...zoo, { id: idZone, nameZone: newZone, animals: [] }]);
  };

  const getDateCurrent = () => {
    const date = new Date();
    return (
      (date.getDate() < 10 ? "0" : "") +
      date.getDate() +
      "/" +
      (date.getMonth() + 1 < 10 ? "0" : "") +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      (date.getHours() < 10 ? "0" : "") +
      (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes() +
      ":" +
      (date.getSeconds() < 10 ? "0" : "") +
      date.getSeconds() +
      (date.getHours() > 12 ? " PM" : " AM")
    );
  };

  const onAddAnimal = (
    nameAnimal: string,
    species: string,
    idAnimal: number,
    idZone: number
  ): void => {
    let findZone = zoo.findIndex((x) => x.id === idZone);

    const auxZoo = [...zoo];
    auxZoo[findZone].animals?.push({
      id: idAnimal,
      idZone,
      nameAnimal,
      species,
      comments: [],
    });

    setZoo(auxZoo);
  };

  const onAddComment = (
    body: string,
    author: string,
    date: string,
    idComment: number,
    idAnimal: number,
    idZone: number
  ): void => {
    const auxZoo = [...zoo];

    let findZone = zoo.findIndex((x) => x.id === idZone);
    let findAnimal = auxZoo[findZone].animals.findIndex(
      (x) => x.id === idAnimal
    );

    auxZoo[findZone].animals[findAnimal].comments?.unshift({
      id: idComment,
      idZone,
      idAnimal,
      body,
      author,
      date,
      answer: [],
    });

    setZoo(auxZoo);
  };

  const onAddAnswer = (
    body: string,
    author: string,
    date: string,
    idComment: number,
    idAnimal: number,
    idZone: number,
    idAnswer: number
  ): void => {
    const auxZoo = [...zoo];
    let findZone = zoo.findIndex((x) => x.id === idZone);
    let findAnimal = auxZoo[findZone].animals.findIndex(
      (x) => x.id === idAnimal
    );
    let findComment = auxZoo[findZone].animals[findAnimal].comments?.findIndex(
      (x) => x.id === idComment
    );

    auxZoo[findZone].animals[findAnimal].comments[findComment].answer.unshift({
      id: idAnswer,
      idZone,
      idAnimal,
      idComment,
      author,
      body,
      date,
    });

    setZoo(auxZoo);
  };

  // console.log("Zoo con animales", zoo);

  const onSelectZone = (value: DataZoo) => {
    navigate(`/animals/${value.id}`);
  };

  const onSelectAnimal = (value: Animals, position: number, idZone: number) => {
    setpositionZone(position);
    setIdZone(idZone);
    navigate(`/detalle-animal/${value.id}`);
  };

  const getIndexZone = (id: string): number => {
    if (id) {
      const findIndex = zoo.findIndex((x) => x.id === parseInt(id));
      return findIndex;
    }
    return Object({});
  };

  const getZoneById = (id: string): DataZoo => {
    if (id) {
      const numberId = parseInt(id);
      return zoo.find((x) => x.id == numberId) ?? Object({});
    }
    return Object({});
  };

  const getAnimalById = (id: string): Animals => {
    if (id) {
      const findIndex = zoo[positionZone].animals.findIndex(
        (x) => x.id === parseInt(id)
      );
      return zoo[positionZone].animals[findIndex];
    }
    return Object({});
  };

  const getPositionAnimal = (id: string) => {
    return zoo[positionZone].animals.findIndex((x) => x.id === parseInt(id!));
  };

  const backMain = (value: boolean) => {
    return value;
  };

  return (
    <ZooContext.Provider
      value={{
        zoo,
        positionZone,
        idZone,
        generateId,
        onAddZone,
        onSelectZone,
        onAddAnimal,
        onAddComment,
        onAddAnswer,
        onSelectAnimal,
        getIndexZone,
        getZoneById,
        getAnimalById,
        getPositionAnimal,
        getDateCurrent,
        backMain,
      }}
    >
      {children}
    </ZooContext.Provider>
  );
};
