"use client";

import axios from "axios";

export async function buyProduct() {
  try {
    const response = await axios.post("/api/purchaseProduct/product", {
      productId: "417018",
    });

    const url = response.data?.data;

    if (url) {
      // Create a temporary anchor element
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer"; // Security measure to prevent the new page from accessing the window object

      // Programmatically click the anchor element
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (error) {
    console.error(error);
    // notify that could not buy a product
  }
}
