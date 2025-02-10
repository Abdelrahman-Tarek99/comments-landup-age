// commentsApi.ts
import {axiosInstance} from '@/common/services';
import { ICommentCreation, ICommentsResponse } from './CommentsInterface';

// Fetch all comments (with populate)
export const fetchComments = async (): Promise<ICommentsResponse> => {
  const response = await axiosInstance.get('?populate=*');
  return response.data;
};

// Fetch a comment by its ID
export const fetchCommentById = async (id: number) => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};

// Create a new comment
export const createComment = async (newComment: ICommentCreation) => {
  const response = await axiosInstance.post('', newComment);
  return response.data;
};

// Delete a comment by ID
export const deleteComment = async (id: number) => {
  const response = await axiosInstance.delete(`/${id}`);
  return response.data;
};

// Edit a comment (update)
export const editComment = async (newComment: ICommentCreation) => {
  const response = await axiosInstance.put(`/${newComment.id}`, newComment);
  return response.data;
};
