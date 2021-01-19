import ytpl from "ytpl"
import { Response } from 'express'

export const ytPlaylistService = async (playlistId: string, res: Response) => {
    try {
        const playlist = await ytpl(playlistId)
        const medias = playlist.items.map(item => ({ id: item.id, title: item.title }))
        const uniqMedias = medias.reduce((acc, value) => {
            if (!acc.map(media => media.id).includes(value.id)) {
                acc.push(value)
            }
            return acc
        }, [] as {
            id: string;
            title: string;
        }[])

        res.json(uniqMedias)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}
