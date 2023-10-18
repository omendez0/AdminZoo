import { DELETE, GET, POST, PUT } from "./request";

export const createAnimal = {
  async createAnimal(name: string, species: string, zone: string) {
    const response = await POST("/animal", { name, species, zone });
    return response;
  },
};

export const getAnimals = {
  async getAnimals() {
    const response = await GET("/animals");
    return response;
  },
};

export const updateAnimal = {
  async updateAnimal(id: string, name: string, species: string, zone: string) {
    const response = await PUT(`/animal/${id}`, { name, species, zone });
    return response;
  },
};

export const deleteAnimal = {
  async deleteAnimal(id: string) {
    const response = await DELETE(`/animal/${id}`);
    return response;
  },
};

export const countAnimalsByZone = {
  async countAnimalsByZone(zoneId: string) {
    const response = await GET(`/animals/${zoneId}`);
    return response;
  },
};

export const getAnimalCountBySpecies = {
  async getAnimalCountBySpecies() {
    const response = await GET(`/animals/species`);
    return response;
  },
};

export const getAnimalsByRegistrationDate = {
  async getAnimalsByRegistrationDate(date: string) {
    const response = await GET(`/animals/registration/${date}`);
    return response;
  },
};
