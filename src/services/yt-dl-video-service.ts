import { Response } from 'express'
import { ytDlValidatorVideo } from "../validators/yt-dl-validator-video"
import { downloaderVideoService } from "./downloader-video-service"
import { getVideoInfosService } from "./get-video-infos-service"

export const ytDlVideoService = async (videoId: string, res: Response) => {
    try {
        const videoInfos = await getVideoInfosService(videoId)
        const videoDetails = videoInfos.player_response.videoDetails
        ytDlValidatorVideo(videoInfos.formats[0], videoDetails)

        await downloaderVideoService(videoId, res)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}
