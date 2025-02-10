import { BASELOCALHOST, CommentData, ICommentsResponse } from "@/common/services";

export function formatComments(comments: ICommentsResponse): CommentData[] {
  return comments.data.map((comment) => {
    return {
        id: comment.id,
      documentId: comment.id,
      tittle: comment.tittle,
      description: comment.description,
      feel: comment.feel || '',
      image: comment.userLogo?.url ? `${BASELOCALHOST}${comment.userLogo.url}` : '',
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      publishedAt: comment.publishedAt,
    };
  });
}