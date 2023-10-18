import { GET, POST } from "./request";

export const createComment = {
  async createComment(body: string, author: string, animalId: string) {
    const response = await POST(`/comment`, { body, author, animalId });
    return response;
  },
};

export const replyComment = {
  async replyComment(body: string, author: string, commentId: string) {
    const response = await POST(`/${commentId}/reply`, { body, author });
    return response;
  },
};

export const getComments = {
  async getComments() {
    const response = await GET(`/comment`);
    return response;
  },
};

export const getResponsePercentage = {
  async getResponsePercentage() {
    const response = await GET(`/comment/percentage`);
    return response;
  },
};

export const getReplayByCommentId = {
  async getReplayByCommentId(commentId: string) {
    const response = await GET(`/comment/${commentId}/replies`);
    return response;
  },
};
