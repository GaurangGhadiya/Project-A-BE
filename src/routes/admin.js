import { Router } from "express";
import { adminController } from "../controllers/index.js";
// import { adminController } from '../controllers'
import * as validation from "../validation/index.js";
import { adminJWT } from "../helpers/jwt.js";
import { upload } from "../helpers/multer.js";
const router = Router();

// without auth
router.post("/login", validation?.login, adminController.login);

// with auth
router.use(adminJWT)
router.get('/category', adminController.get_category)
router.post('/category', upload.single('file'), validation?.add_category, adminController.add_category)
router.post('/update-category',  validation?.update_category, adminController.update_category)
router.get('/categoryById/:id', adminController.category_by_id)
router.get('/delete-category/:id', adminController.delete_category)

export const adminRouter = router;
