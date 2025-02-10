import { CommentData, useGetCommentsQuery } from "@/common/services/comments";
import { Cards } from "@/common/components/cards";
import { useEffect, useState } from "react";
import { formatComments } from "../../utils";

export const CardsComment = () => {
  const { isLoading, isFetching, isUninitialized, isError, data, error } =
    useGetCommentsQuery(undefined, {});

  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    if (data && data.data.length) {
      setComments(formatComments(data));
    }
  }, [data]);
  console.log(comments);

  // Show loading state while fetching initial data
  if (isLoading || isUninitialized) {
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

  if (isError) return <div>Error: {JSON.stringify(error)}</div>;

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
