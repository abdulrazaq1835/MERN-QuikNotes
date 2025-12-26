import express from 'express'
import { SignUp,Login } from "../controllers/authControllers.js";

const router =  express.Router()

router.post('/signup',SignUp)
router.post('/login',Login)

export default router