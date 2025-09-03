import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { coupon, cartId, authToken, userId, pin } = req.body;

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
    // If API fails, axios throws
    return res.status(500).json({
      coupon,
      error: err.response?.data || err.message
    });
  }
}
