import express from "express";
import eventController from "../controllers/eventController";

const router = express.Router();

/*
 * GET
 */
router.get("/", eventController.list);

/*
 * GET
 */
router.get("/:id", eventController.show);

/*
 * POST
 */
router.post("/", eventController.create);

/*
 * PUT
 */
router.put("/:id", eventController.update);

router.put("/updateOption/:id", eventController.updateOption);

/*
 * DELETE
 */
router.delete("/:id", eventController.remove);

export default router;
