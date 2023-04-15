"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

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
    <main className="flex items-center justify-center gap-2 text-white">
      <div>{/* <Card {...product} /> */}</div>
      <div></div>
    </main>
  );
}
