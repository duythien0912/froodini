import express from "express";
import sendMailController from "../controllers/sendMailController";

const router = express.Router();

/*
 * POST
 */
router.post("/", sendMailController.sendMail);

export default router;
