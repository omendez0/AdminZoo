import { createContext } from "react";
import { Animals, DataZoo } from "../model/DataZoo";

export type ZooContextProps = {
  zoo: DataZoo[];
  positionZone: number;
  idZone: number;
  generateId: number;
  onAddZone: (newZone: string, idZone: number) => void;
  onSelectZone: (value: DataZoo) => void;
  onAddAnimal: (
    nameAnimal: string,
    specie: string,
    idAnimal: number,
    idZone: number
  ) => void;
  onAddComment: (
    body: string,
    author: string,
    date: string,
    idComment: number,
    idAnimal: number,
    idZone: number
  ) => void;
  onAddAnswer: (
    body: string,
    author: string,
    date: string,
    idComment: number,
    idAnimal: number,
    idZone: number,
    idAnswer: number
  ) => void;
  onSelectAnimal: (value: Animals, position: number, idZone: number) => void;
  getIndexZone: (id: string) => number;
  getZoneById: (id: string) => DataZoo;
  getAnimalById: (id: string) => Animals;
  getPositionAnimal: (id: string) => number;
  getDateCurrent: () => string;
  backMain: (value: boolean) => void;
};

export const ZooContext = createContext<ZooContextProps>(Object({}));
