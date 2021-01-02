import { RequestHandler } from 'express'
import videoSH from './video'

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await videoSH.findOne({url: req.body.url})
  if(videoFound) 
    return res.status(301).json({message: 'URL existente'})

  const video = new videoSH(req.body)
  const saveVideo = await video.save()
  
  res.json(saveVideo)
}

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await videoSH.find()
    return res.json(videos);
  } catch (error) {
    res.json(error)
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await videoSH.findById(req.params.id)
  if(!videoFound) return res.status(204).json({message: 'Video no encontrado'})
  
  return res.json(videoFound)
}

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await videoSH.findByIdAndDelete(req.params.id)
  if(!videoFound) return res.status(204).json()
  
  return res.json(videoFound)
}

export const updateVideo: RequestHandler = async (req, res) => {
  const videoUpdated = await videoSH.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if(!videoUpdated) return res.status(204).json()
  res.json(videoUpdated)
}