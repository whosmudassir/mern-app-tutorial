import {
  signUp,
  login,
  getAuthenticatedUser,
  logout,
} from "../controllers/users";
import express from "express";

const router = express.Router();
router.get("/", getAuthenticatedUser);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

export default router;
