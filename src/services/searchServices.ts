import { GET } from "./request";

export const getSearch = {
  async getSearch(keyword: string) {
    const response = await GET(`/search?keyword=${keyword}`);
    return response;
  },
};
