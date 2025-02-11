import { useForm } from "react-hook-form";
import { ICommentCreation } from "@/common/services";
import { useContext, useEffect } from "react";
import { commentContext } from "../commentProvider";

export const useEditCommentForm = () => {
  const {
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
  } = useContext(commentContext);

  const { handleSubmit, reset, control, formState } = useForm({
    mode: "onTouched",
    defaultValues: {
      id: undefined,
      tittle: "",
      description: "",
      userLogo: "",
      feel: "",
    },
  });

  useEffect(() => {
    if (commentData) {
      //   reset({
      //     id: commentData.,
      //     tittle: commentData.tittle,
      //     description: commentData.description,
      //     userLogo: commentData.userLogo,
      //   });
    }
  }, [commentData, reset]);

  const onSubmit = (data: ICommentCreation) => {
    console.log(data);
  };
  const onCancel = () => {
    console.log("cancel");
  };

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
    handleSubmit,
    reset,
    control,
    formState,
    onSubmit,
    onCancel,
  };
};
