import { Router } from "express";

import {
  createActor,
  deleteActorById,
  getActorById,
  getAllActors,
  updateActorById,
} from "../controllers/actor.controller.js";

export const router = Router();

router.get("/actors", getAllActors);
router.post("/actors", createActor);
router.get("/actors/:id", getActorById);
router.put("/actors/:id", updateActorById);
router.delete("/actors/:id", deleteActorById);


