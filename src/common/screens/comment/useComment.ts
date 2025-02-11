import {
  useGetCommentById,
  useEditComment,
} from "@/common/services/comments/useComments";
import { useParams } from "react-router-dom";

export const useComment = () => {
  const { id } = useParams();
  const {
    data: commentData,
    isLoading,
    error,
    isSuccess,
    isError,
    refetch,
  } = useGetCommentById(id as unknown as number);
  const {
    mutate: editComment,
    isLoading: isEditing,
    isSuccess: isEditSuccess,
    isError: isEditError,
    error: editError,
  } = useEditComment();

  return {
    commentData,
    isLoading,
    error,
    isSuccess,
    isError,
    refetch,
    editComment,
    isEditing,
    isEditSuccess,
    isEditError,
    editError,
  };
};
