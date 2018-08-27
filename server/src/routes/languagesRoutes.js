import { Router } from "express";
import languagesController from "../controllers/languagesController";

const router = Router();

/*
 * GET
 */

/*
 * POST
 */

router.get("/", languagesController.list);

/*
 * PUT
 */
// router.put("/:id", uploadImageRoutes.update);

export default router;
