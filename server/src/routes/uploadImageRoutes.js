import express from "express";
import uploadImageController from "../controllers/uploadImageController";

const router = express.Router();

/*
 * GET
 */

/*
 * POST
 */

router.post("/", uploadImageController.upload);

/*
 * PUT
 */
// router.put("/:id", uploadImageRoutes.update);

export default router;
