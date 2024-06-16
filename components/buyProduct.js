"use client";

import axios from "axios";

export async function buyProduct() {
  try {
    const response = await axios.post("/api/purchaseProduct/product", {
      productId: "417018",
    });

    const url = response.data?.data;

    if (url) {
      // Attempt to open in new tab
      const newTab = window.open(url, "_blank");
      console.log(newTab, 'newTab');
      if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
        // Fallback if pop-up blocker blocks the new tab
        window.location.href = url;
      }
    }
  } catch (error) {
    console.error(error);
    // notify that could not buy a product
  }
}
