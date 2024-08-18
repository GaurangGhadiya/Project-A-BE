
import Joi from "joi"
import { apiResponse } from '../common/index.js'


export const add_category = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().lowercase().max(50).required().error(new Error('category name is required! & max length is 50')),
        // password: Joi.string().max(20).required().error(new Error('password is required! & max length is 20')),
        // deviceToken: Joi.string().error(new Error('deviceToken is string!')),
    })
    schema.validateAsync(req.body).then(async result => {
        req.body = result
        return next()
    }).catch(async error => {
        res.status(400).json(await apiResponse(400, error.message, {}, {}));
    })
}
export const update_category = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().lowercase().max(50).required().error(new Error('category name is required! & max length is 50')),
        id: Joi.number().integer().required().error(new Error('id is required!')),
    })
    schema.validateAsync(req.body).then(async result => {
        req.body = result
        return next()
    }).catch(async error => {
        res.status(400).json(await apiResponse(400, error.message, {}, {}));
    })
}