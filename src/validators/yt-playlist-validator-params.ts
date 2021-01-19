import Joi from "joi"

export const schemaPlaylistId = Joi.object({
    playlistId: Joi.string()
        .required(),
})
