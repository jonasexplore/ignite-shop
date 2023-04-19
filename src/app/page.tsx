"use client";

import { Card } from "@/components/card";
import products from "@/mocks/products.json";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Page() {
  const router = useRouter();

  const CARD_WIDTH_WITH_GAP = 648;
  const carrosel = useRef<any>(null);

  const handleRightClick = (event: any) => {
    event.preventDefault();

    if (!carrosel.current) return;

    carrosel.current.scrollLeft += CARD_WIDTH_WITH_GAP;
  };

  const handleLeftClick = (event: any) => {
    event.preventDefault();

    if (!carrosel.current) return;

    carrosel.current.scrollLeft -= CARD_WIDTH_WITH_GAP;
  };

  const handleOnClickProduct = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <main>
      <div className="h-full flex items-center justify-center gap-2">
        <div
          className="flex gap-12 overflow-hidden scroll overflow-x-hidden whitespace-nowrap scroll-smooth"
          ref={carrosel}
        >
          {products.map((product) => {
            const { id, ...props } = product;

            return (
              <Card
                key={id}
                onClick={() => handleOnClickProduct(id)}
                {...props}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-white text-black rounded-full w-12 h-12"
          onClick={handleLeftClick}
        >
          {"<"}
        </button>
        <button
          className="bg-white text-black rounded-full w-12 h-12"
          onClick={handleRightClick}
        >
          {">"}
        </button>
      </div>
    </main>
  );
}
