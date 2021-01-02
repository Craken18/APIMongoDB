import { Router } from "express";
const router = Router();

import * as controller from './videos.controller'

router.get('/videos', controller.getVideos);

router.get('/videos/:id', controller.getVideo);

router.post('/videos', controller.createVideo);

router.delete('/videos/:id', controller.deleteVideo)

router.put('/videos/:id', controller.updateVideo)

export default router