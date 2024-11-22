import express from "express";
import { getAlluser, createuser, updateUser, deleteUser } from "../controller/userController";

const router = express.Router()

router.get('/users', getAlluser)
router.post('/users', createuser)
router.put('/users/:id', updateUser)
router.delete("/users/:id", deleteUser);

export default router