import express from "express";
import itemController from "../controllers/itemController";

const router = express.Router();

/*
 * GET
 */
router.get("/", itemController.list);

/*
 * GET
 */
router.get("/:id", itemController.show);

/*
 * POST
 */
router.post("/", itemController.create);

/*
 * PUT
 */
router.put("/:id", itemController.update);

/*
 * DELETE
 */
router.delete("/:id", itemController.remove);

module.exports = router;
