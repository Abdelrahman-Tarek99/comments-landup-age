import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";

interface CardsProps {
  imageUrl?: string;
  title: string;
  description: string;
}

export const Cards = ({ description, imageUrl, title }: CardsProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md md:flex md:gap-3 ">
      <div className="relative flex w-14 h-14 md:h-10 md:w-10 shrink-0 overflow-hidden rounded-full m-auto md:m-0 md:my-auto">
        <Avatar>
          <AvatarImage src={imageUrl ?? "https://github.com/shadcn.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="p-2 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left text-ellipsis">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};
