import { Request, Response } from 'express'
import { ytDlVideoService } from '../services/yt-dl-video-service'
import { schemaVideoId } from '../validators/yl-dl-validator-params'

export const getVideoFromIdController = async (req: Request, res: Response) => {
    try {
        await schemaVideoId.validateAsync(req.params)
    } catch (err) {
        // only validation error
        res.status(500).json({ error: err.toString() })
    }

    const videoId = req.params.id
    await ytDlVideoService(videoId, res)
}
