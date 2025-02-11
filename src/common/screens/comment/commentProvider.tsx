import { createContext } from "react";
import { ICommentData } from "./comment.types";
import { useComment } from "./useComment";

export const commentContext = createContext<ICommentData>({} as ICommentData);

export const CommentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const extractionOfCustomHook = useComment();

  return (
    <commentContext.Provider value={{ ...extractionOfCustomHook }}>
      {children}
    </commentContext.Provider>
  );
};
