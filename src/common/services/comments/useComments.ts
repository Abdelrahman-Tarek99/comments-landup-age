// useComments.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchComments,
  fetchCommentById,
  createComment,
  deleteComment,
  editComment,
} from "@/common/services";
import { ICommentsResponse } from "./CommentsInterface";

// Hook to fetch all comments
export const useComments = () => {
  return useQuery<ICommentsResponse, Error>(["comments"], fetchComments);
};

// Hook to fetch a single comment by ID
export const useGetCommentById = (id: number) => {
  return useQuery(["comment", id], () => fetchCommentById(id));
};

// Hook to create a new comment
export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation(createComment, {
    onSuccess: () => {
      // Invalidate and refetch the comments list after a new comment is created
      queryClient.invalidateQueries(["comments"]);
    },
  });
};

// Hook to delete a comment
export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteComment, {
    onSuccess: () => {
      // Invalidate the comments list cache so it refetches
      queryClient.invalidateQueries(["comments"]);
    },
  });
};

// Hook to edit/update a comment
export const useEditComment = () => {
  const queryClient = useQueryClient();
  return useMutation(editComment, {
    onSuccess: () => {
      // Invalidate the comments list cache so it refetches
      queryClient.invalidateQueries(["comments"]);
    },
  });
};
