import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse body safely (Vercel may not auto-parse JSON)
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON body" });
      }
    }

    const { coupon, cartId, authToken, userId, pin } = body;

    if (!coupon || !cartId || !authToken || !userId || !pin) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const response = await axios.get(
      `https://www.jiomart.com/mst/rest/v1/5/cart/apply_coupon`,
      {
        params: {
          coupon_code: coupon,
          cart_id: cartId
        },
        headers: {
          "authtoken": authToken,
          "userid": userId,
          "pin": pin,
          "Accept": "application/json, text/plain, */*"
        }
      }
    );

    return res.status(200).json({ coupon, result: response.data });
  } catch (err) {
    return res.status(500).json({
      error: err.response?.data || err.message
    });
  }
}
