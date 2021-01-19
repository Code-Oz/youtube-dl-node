import ytdl from "ytdl-core"

export const getVideoInfosService = async (videoId: string) => {
    return await ytdl.getInfo(videoId)
}
