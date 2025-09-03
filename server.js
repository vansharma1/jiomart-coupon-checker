import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check-coupon", async (req, res) => {
  const { coupon, cartId, authToken, userId, pin } = req.body;

  try {
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
    res.json({ coupon, result: data });
  } catch (err) {
    res.status(500).json({ coupon, error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
