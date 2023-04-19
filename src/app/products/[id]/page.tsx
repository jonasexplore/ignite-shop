"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";

import { Button } from "@/components/button";
import products from "@/mocks/products.json";
import NotFound from "./not-found";

export default function Page() {
  const { id } = useParams();

  const product = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <main className="flex items-center justify-center gap-16 text-white">
      <div className="flex-1 bg-card-gradient rounded-lg relative">
        <div className="p-1 flex flex-col h-full w-full items-center justify-center">
          <Image
            src={product.image}
            width={520}
            height={480}
            alt="t-shirt image"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between h-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product?.label}</h2>
          <span className="text-green-600 text-3xl">R$ {product?.price}</span>
        </div>
        <Button>Comprar agora</Button>
      </div>
    </main>
  );
}
