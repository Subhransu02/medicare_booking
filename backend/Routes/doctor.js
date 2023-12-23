import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);
export default router;
