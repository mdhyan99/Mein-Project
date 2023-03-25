import { Router } from "express";
import * as controller from "../controllers/terminController.js"
const router = Router();
router
    .get("/", controller.getAllTermine)
    .get("/:id", controller.getOneTermin)
    .post("/", controller.createdTermin)
    .put("/:id", controller.updateTermin)
    .delete("/:id", controller.deleteOneTermin);

export default router;