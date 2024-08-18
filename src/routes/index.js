import { Router } from 'express'
import { userRouter } from './user.js'
import { adminRouter } from './admin.js'
import { userStatus } from '../common/index.js'

const router = Router()

const accessControl = (req, res, next) => {
    req.headers.userType = userStatus[req.originalUrl.split('/')[1]]
    next()
}

// router.use('/security', securityRouter)
router.use('/user', accessControl, userRouter)
router.use('/admin', accessControl, adminRouter)
// router.use('/upload', accessControl, uploadRouter)
// router.post('/webhook', userController.paypal_webhook)

export default router 

