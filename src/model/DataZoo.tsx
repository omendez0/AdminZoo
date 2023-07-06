export type DataZoo = {
  id: number;
  nameZone: string;
  animals: Animals[];
};

export type Animals = {
  id: number;
  idZone: number;
  nameAnimal: string;
  species: string;
  comments: Comments[];
};

export type Comments = {
  id: number;
  idZone: number;
  idAnimal: number;
  body: string;
  author: string;
  date: string;
  answer: Answer[];
};

export type Answer = {
  id: number;
  idZone: number;
  idAnimal: number;
  idComment: number;
  body: string;
  author: string;
  date: string;
};
