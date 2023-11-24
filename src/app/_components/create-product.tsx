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
            isPublished: true,
            images: [
              "https://images.unsplash.com/photo-1700451761281-fa705b64935d?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          })
        }
        disabled={createProduct.isLoading}
      >
        {createProduct.isLoading ? "Creating" : "Create"}
      </button>
    </div>
  );
}
