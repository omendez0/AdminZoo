import { POST } from "./request";

export const loginUser = async (email: string, password: string) => {
  const response = await POST("/signin", { email, password });
  return response;
};

export const createEmployee = async (email: string, password: string) => {
  const response = await POST("/signup", { email, password });
  return response;
};
