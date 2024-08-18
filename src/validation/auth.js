
import Joi from "joi"
import { apiResponse } from '../common/index.js'


export const login = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().lowercase().max(50).required().error(new Error('email is required! & max length is 50')),
        password: Joi.string().max(20).required().error(new Error('password is required! & max length is 20')),
        // deviceToken: Joi.string().error(new Error('deviceToken is string!')),
    })
    schema.validateAsync(req.body).then(async result => {
        req.body = result
        return next()
    }).catch(async error => {
        res.status(400).json(await apiResponse(400, error.message, {}, {}));
    })
}