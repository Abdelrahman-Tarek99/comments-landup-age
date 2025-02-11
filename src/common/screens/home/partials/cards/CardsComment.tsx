import { CommentData } from "@/common/services/comments";
import { Cards } from "@/common/components/cards";
import { useEffect, useState } from "react";
import { formatComments } from "../../utils";
import { useComments } from "@/common/services/comments/useComments";
import { toast } from "react-toastify";

export const CardsComment = () => {
  const { isLoading, isFetching, isError, data, error } = useComments();

  useEffect(() => {
    if (isError && error) {
      console.log(`Error fetching comments: ${error.message}`);
      toast.error(`Error fetching comments: ${error.message}`);
    }
  }, [isError, error]);
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    if (data && data.data.length) {
      setComments(formatComments(data));
    }
  }, [data]);

  // Show loading state while fetching initial data
  if (isLoading) {
    return (
      <>
        {[1, 2, 3].map((index) => (
          <Cards
            key={index}
            isLoading={true}
            isError={false}
            image=""
            tittle=""
            description=""
          />
        ))}
      </>
    );
  }

  if (isError)
    return (
      <div className="error-message">
        <h3>Error Loading Comments</h3>
        <p>
          {error instanceof Error
            ? error.message
            : "An unexpected error occurred"}
        </p>
      </div>
    );

  return (
    <>
      {comments.map((card, index) => (
        <Cards
          key={card.id || index}
          {...card}
          isLoading={isFetching}
          isError={isError}
        />
      ))}
    </>
  );
};
