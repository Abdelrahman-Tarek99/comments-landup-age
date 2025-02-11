import { EditCommentForm } from "@/common/screens/comment";
import { CommentProvider } from "./commentProvider";

export const Comment = () => {
  return (
    <CommentProvider>
      <EditCommentForm />;
    </CommentProvider>
  );
};
