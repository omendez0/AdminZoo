import { DELETE, GET, POST, PUT } from "./request";

export const createdSpecie = {
  async createdSpecie(name: string) {
    const response = await POST("/specie", { name });
    return response;
  },
};

export const getSpecies = {
  async getSpecies() {
    const response = await GET("/specie");
    return response;
  },
};

export const updateSpecie = {
  async updateSpecie(id: string, name: string) {
    const response = await PUT(`/specie/${id}`, { name });
    return response;
  },
};

export const deleteSpecie = {
  async deleteSpecie(id: string) {
    const response = await DELETE(`/specie/${id}`);
    return response;
  },
};
