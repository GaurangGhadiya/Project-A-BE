import { Router } from "express";
const router = Router();

// without auth
// router.post("/login", validation?.login, userController.login);

// with auth
// router.use(userJWT);

// router.get("/profile", userController.get_profile);
// router.post(
//   "/change_password",
//   validation?.change_password,
//   userController.change_password
// );

export const userRouter = router;
