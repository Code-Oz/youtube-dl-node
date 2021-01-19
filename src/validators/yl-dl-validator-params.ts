import Joi from "joi"

export const schemaVideoId = Joi.object({
    id: Joi.string()
        .required(),
})
