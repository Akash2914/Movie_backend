import express from "express";
import { addAdmin, adminLogin, getAdminById, getAdmins } from "../controllers/admin-controllers.js";

const adminRouter = express.Router();

adminRouter.get("/", getAdmins);
adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/:id", getAdminById);

export default adminRouter;