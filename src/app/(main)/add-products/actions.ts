"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";

export async function addProducts(formData: FormData) {
  const name = formData.get("name")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const description = formData.get("description")?.toString();
  const price = Number(formData.get("price"));

  if (!name || !description || !imageUrl || !price) {
    throw new Error("Plaese check your all Fileds.");
  }

 
    await db.product.create({
      data: {
        name,
        description,
        imageUrl,
        price,
      },
    });
  

  redirect("/");
}
