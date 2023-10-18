import { DELETE, GET, POST, PUT } from "./request";

export const createZone = {
  async createZone(name: string) {
    const response = await POST("/zone", { name });
    return response;
  },
};

export const getZones = {
  async getZones() {
    const response = await GET("/zone");
    return response;
  },
};

export const updateZone = {
  async updateZone(id: string, name: string) {
    const response = await PUT(`/zone/${id}`, { name });
    return response;
  },
};

export const deleteZone = {
  async deleteZone(id: string) {
    const response = await DELETE(`/zone/${id}`);
    return response;
  },
};
