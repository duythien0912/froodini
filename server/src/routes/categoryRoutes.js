import express from "express";
import categoryController from "../controllers/categoryController";

const router = express.Router();

/*
 * GET
 */
router.get("/", categoryController.list);

/*
 * GET
 */
router.get("/:id", categoryController.show);

/*
 * POST
 */
router.post("/", categoryController.create);

router.post("/:name", categoryController.createDish);

/*
 * PUT
 */
router.put("/:id", categoryController.update);

router.put("/:name/:id", categoryController.updateDish);

/*
 * DELETE
 */
router.delete("/:id", categoryController.remove);

router.delete("/:name/:id", categoryController.removeDish);

export default router;
