import { Request, Response } from 'express'
import { getVideoInfosService } from '../services/get-video-infos-service'
import { schemaVideoId } from '../validators/yl-dl-validator-params'

export const getVideoInfosController = async (req: Request, res: Response) => {
    try {
        await schemaVideoId.validateAsync(req.params)
        const videoId = req.params.id
        const videoInfos = await getVideoInfosService(videoId)
        res.json(videoInfos.videoDetails)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}
