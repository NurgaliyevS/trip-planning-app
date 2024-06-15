import { lemonSqueezyApiInstance } from "@/utills/axios";

export const dynamic = "force-dynamic";

export default async function handler(req, res) {
  try {
    const request = await req.body;

    if (!request.productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required" });
    }

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          custom_price: 50000,
          product_options: {
            enabled_variants: [1],
          },
          checkout_options: {
            button_color: "#2DD272",
          },
          checkout_data: {
            discount_code: "10PERCENTOFF",
            custom: {
              user_id: 123,
            },
          },
          expires_at: "2022-10-30T15:20:06Z",
          preview: true,
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: request.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    // console.log(checkoutUrl, 'checkout url');

    // console.log(response.data, 'data');


  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "An error occured" });
  }
}
