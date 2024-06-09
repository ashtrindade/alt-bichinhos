import joi from 'joi'
import { AnimalType } from '../enum/AnimalType'
import { Language } from '../enum/Language'

const imageSchema = joi.object({
  fileUrl: joi.string().required(),
  type: joi.string().valid(...Object.values(AnimalType)).required(),
  description: joi.string().required(),
  alt: joi.object({
    pt_br: joi.string().required(),
    en: joi.string().required(),
    es: joi.string().required(),
    de: joi.string().required()
  }).required()
})

const paramsSchema = joi.object({
  id: joi.string().guid({ version: 'uuidv4' }),
  language: joi.string().valid(...Object.values(Language)),
  type: joi.string().valid(...Object.values(AnimalType)),
  page: joi.number().min(1).default(1),
  limit: joi.number().min(1).max(100).default(10)
})

export { imageSchema, paramsSchema }
