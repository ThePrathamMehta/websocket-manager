import {Router} from "express";
import { me, SignIn, SignUp } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/authMiddleware';
import { signInSchema, signUpSchema } from '../validators/user.validator';
import { validator } from '../validators/bodyValidator';

const router = Router();

router.post("/signUp",validator(signUpSchema),SignUp);

router.post("/signIn",validator(signInSchema),SignIn);

router.post("/me",authMiddleware,me);

export default router;