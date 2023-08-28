import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserByID,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("Hello user,you are loggedd in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user,you are loggedd in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin,you are loggedd in and you can delete all account");
// });

router.get("/", verifyAdmin, getAllUsers);

router.put("/:id", verifyUser, updateUser);

router.get("/:id", verifyUser, getUserByID);

router.delete("/:id", verifyUser, deleteUser);

export default router;
