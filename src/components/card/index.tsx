import Image from "next/image";
import { useState } from "react";
import { CardSkeleton } from "../skeletons/card";

type Props = {
  label: string;
  price: string;
  image: string;
  loading?: boolean;
  onClick?: () => void;
};

export const Card = ({
  image,
  label,
  price,
  loading = false,
  onClick,
}: Props) => {
  const [active, setActive] = useState(false);

  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <div
      className="bg-card-gradient min-w-[600px] h-[600px] rounded-lg relative cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={onClick}
    >
      <div className="p-1 flex flex-col h-full w-full items-center justify-center">
        <div className="flex items-center justify-center">
          <Image src={image} width={520} height={480} alt="t-shirt image" />
        </div>

        {active && (
          <div className="absolute w-full bottom-0 p-1">
            <div className="flex justify-between items-center bg-gray-800 rounded-lg p-8 ">
              <span className="text-gray-100 font-bold">{label}</span>
              <span className="text-green-600 font-bold">{price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
