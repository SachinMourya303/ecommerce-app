import Joi from "joi"


export const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        companyname: Joi.string().min(3).max(100).required(),
        sellername: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(20).required(),
        address: Joi.string().min(10).max(100).required(),
        city: Joi.string().min(3).max(100).required(),
        state: Joi.string().min(3).max(100).required(),
        country: Joi.string().min(3).max(100).required(),
        pincode: Joi.string().min(4).max(100).required(),
        password: Joi.string().min(4).max(100).required(),
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(404).json({ success: false, message: error.message });
    }
    next();
}

export const signInValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(404).json({ success: false, message: error.message });
    }
    next();
}