import { GET } from "./request";

export const getSearch = async (keyword: string) => {
  const response = await GET(`/search?keyword=${keyword}`);
  return response;
};
