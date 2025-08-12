import { ratelimit } from "../config/upstash.js";

export const rateLimiter = async ( req,res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key"); // 10 requests per 20 seconds
    if (!success) {
      return res.status(429).json({ message: "Rate limit exceeded" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    next(error);
  }
};
