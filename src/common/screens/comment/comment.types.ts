import { ICommentCreation, ICommentsResponse } from "@/common/services";
import { UseMutateFunction } from "@tanstack/react-query";

export interface ICommentData {
  commentData: ICommentsResponse | undefined;
  isLoading: boolean;
  error: unknown;
  isSuccess: boolean;
  isError: boolean;
  refetch: () => void;
  editComment: UseMutateFunction<any, unknown, ICommentCreation, unknown>;
  isEditing: boolean;
  isEditSuccess: boolean;
  isEditError: boolean;
  editError: unknown;
}
