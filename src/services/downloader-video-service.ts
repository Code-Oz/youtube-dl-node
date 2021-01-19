import ytdl from 'ytdl-core'
import { Response } from 'express'

export const downloaderVideoService = async (videoId: string, res: Response) => {
    await ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
        quality: 'highestaudio', 
        filter: format => format.container === 'mp4'
    }).pipe(res)
}
