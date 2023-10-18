import { POST } from "./request";

export const loginUser = {
  async login(email: string, password: string) {
    const response = await POST("/signin", { email, password });
    return response;
  },
};

export const createEmployee = {
  async createEmployee(email: string, password: string) {
    const response = await POST("/signup", { email, password });
    return response;
  },
};
