import express from "express";

import foodController from "../controllers/foodController";

const router = express.Router();

/*
 * GET
 */
router.get("/", foodController.list);

/*
 * GET
 */
router.get("/:id", foodController.show);

/*
 * POST
 */
router.post("/", foodController.create);

/*
 * PUT
 */
router.put("/:id", foodController.update);

/*
 * DELETE
 */
router.delete("/:id", foodController.remove);

export default router;
