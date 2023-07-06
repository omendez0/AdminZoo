import { Answer, Comments } from "./DataZoo";

export type dataAnswer = {
  nameZone: string;
  nameAnimal: string;
  nameComments: string;
  answer: Answer[];
};

export type dataComment = {
  nameZone: string;
  nameAnimal: string;
  comments: Comments[];
};

export type dataAnimal = {
  nameZone: string;
  nameAnimal: string;
  species: string;
};

export type dataZone = {
  nameZone: string;
};
