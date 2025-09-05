import express from "express";
import {register} from "../controller/auth.controller";
const router = express.Router();

router.post("/login", async (req, res) => {

})
router.post("/register", register);
router.get("/auth", async (req, res) => {
    res.json({message : 'fdsfdsfdsfsdf'})
})
router.get("/getUsersById/:userId", async (req, res) => {
    const { userId } = req.params;
    res.json({ message: `User ID = ${userId}` });
});

router.get("/getUsers", async (req, res) => {
    res.json({ message: "Все пользователи" });
});
router.patch("/banned/:userId", async (req, res) => {

})

export default router;