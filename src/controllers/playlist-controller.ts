import { Request, Response } from 'express'
import { schemaPlaylistId } from '../validators/yt-playlist-validator-params'
import { ytPlaylistService } from '../services/yt-playlist-service'

export const getVideoFromPlaylistIdController = async (req: Request, res: Response) => {
    try {
        await schemaPlaylistId.validateAsync(req.params)
    } catch (err) {
        // only validation error
        res.status(500).json({ error: err.toString() })
    }

    const playlistId = req.params.playlistId
    await ytPlaylistService(playlistId, res)
}