import express from "express";

import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", getAllHotels);

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.get("/:id", getHotelByID);

router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
