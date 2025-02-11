import { appRoutes } from "@/common/routing";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CardsProps {
  image?: string;
  tittle: string;
  description: string;
  isLoading?: boolean;
  isError?: boolean;
  id?: number;
}

export const Cards = ({
  description,
  image,
  tittle,
  isError,
  isLoading,
  id,
}: CardsProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md md:flex md:gap-3 hover:shadow-lg  hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      onClick={() => {
        navigate(`${appRoutes.comments}/${id}`);
      }}
    >
      <div className="relative flex w-14 h-14 md:h-10 md:w-10 shrink-0 overflow-hidden rounded-full m-auto md:m-0 md:my-auto">
        <div>
          {isLoading ? (
            <Skeleton className="w-14 h-14 md:h-10 md:w-10 rounded-full" />
          ) : (
            <Avatar>
              <AvatarImage src={image ?? "https://github.com/shadcn.png"} />
              {isError && <AvatarFallback>CN</AvatarFallback>}
            </Avatar>
          )}
        </div>
      </div>
      <div className="p-2 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left text-ellipsis">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-32 mb-2 animate-skeleton-load bg-skeleton from-skeleton-light-from via-skeleton-light-via to-skeleton-light-to dark:from-skeleton-dark-from dark:via-skeleton-dark-via dark:to-skeleton-dark-to " />
            <Skeleton className="h-4 w-48  animate-skeleton-load bg-skeleton from-skeleton-light-from via-skeleton-light-via to-skeleton-light-to dark:from-skeleton-dark-from dark:via-skeleton-dark-via dark:to-skeleton-dark-to" />
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold">{tittle}</h2>
            <p className="text-gray-500">{description}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};
