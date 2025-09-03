import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { coupon, cartId, authToken, userId, pin } = req.body;

    const response = await fetch(
      `https://www.jiomart.com/mst/rest/v1/5/cart/apply_coupon?coupon_code=${coupon}&cart_id=${cartId}`,
      {
        method: "GET",
        headers: {
          "authtoken": authToken,
          "userid": userId,
          "pin": pin,
          "Accept": "application/json, text/plain, */*",
        },
      }
    );

    const data = await response.json();
    return res.status(200).json({ coupon, result: data });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}
