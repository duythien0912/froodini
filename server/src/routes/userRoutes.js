import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

/*
 * GET
 */
router.get("/", userController.list);

/*
 * GET
 */
router.get("/:id", userController.show);

/*
 * POST
 */
router.post("/", userController.create);

/*
 * PUT
 */
router.put("/:id", userController.update);

/*
 * DELETE
 */
router.delete("/:id", userController.remove);

module.exports = router;
