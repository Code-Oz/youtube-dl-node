import express, { Application } from 'express'
import cors from 'cors'
import { getVideoFromPlaylistIdController } from './controllers/playlist-controller'
import { getVideoFromIdController } from './controllers/video-controller'
import { getVideoInfosController } from './controllers/video-infos-controller'

const app: Application = express()

const port: number = 3001

// Allows CORS
app.use(cors())

app.use(function(req, res, next) {
    try {
        decodeURIComponent(req.path)
    }
    catch(err) {
        return res.json({ erreur: err.toString() })
    }
    next()
})

app.get('/video/infos/:id', getVideoInfosController)

app.get('/video/:id', getVideoFromIdController)

app.get('/playlist/:playlistId', getVideoFromPlaylistIdController)

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`)
})
