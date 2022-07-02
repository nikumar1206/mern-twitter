import express from "express";
const router = express.Router();

export default router.get("/test", (req, res) =>
  res.json({ msg: "This is the tweets route" })
);
