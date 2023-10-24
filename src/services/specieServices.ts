import { DELETE, GET, POST, PUT } from "./request";

export const createdSpecie = async (name: string) => {
  const response = await POST("/specie", { name });
  return response;
};

export const getSpecies = async () => {
  const response = await GET("/specie");
  return response;
};

export const updateSpecie = async (id: string, name: string) => {
  const response = await PUT(`/specie/${id}`, { name });
  return response;
};

export const deleteSpecie = async (id: string) => {
  const response = await DELETE(`/specie/${id}`);
  return response;
};
