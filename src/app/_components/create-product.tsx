"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";

export function CreateProduct() {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div>
      <button
        onClick={() =>
          createProduct.mutate({
            name: "123",
            description: "1231",
            price: 12,
            quantity: 1,
          })
        }
        disabled={createProduct.isLoading}
      >
        {createProduct.isLoading ? "Creating" : "Create"}
      </button>
    </div>
  );
}
