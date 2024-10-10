import { Router } from "express"
import { store, destroy, index, show, update } from "../controllers/workshop-controller.js"

const router = Router()

router.post("/", store)
router.get("/", index)
router.get("/:id", show )
router.delete("/:id", destroy)
router.put("/:id", update)


export default router