"use client";

import axios from "axios";

export async function buyProduct() {
  try {
    const response = await axios.post("/api/purchaseProduct/product", {
      productId: "417018",
    });

    window.open(response.data?.data, "_blank");
  } catch (error) {
    console.error(error);
    // notify that could buy a product
  }
}
