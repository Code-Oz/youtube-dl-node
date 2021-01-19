import ytdl from "ytdl-core"

export const ytDlValidatorVideo = (videoFormat: ytdl.videoFormat | undefined, videoDetails: ytdl.VideoDetails) => {
    if (!videoFormat) {
        throw Error('video format undefined, video should be blocks in your country')
    }

    const { hasAudio, container } = videoFormat
    const { lengthSeconds } = videoDetails

    if (hasAudio && container === 'mp4' && Number(lengthSeconds) < 600) {
        return
    }
    
    throw Error('Invalid Format video, should have audio available and mp4 available and video duration less than 10 minutes')
}
