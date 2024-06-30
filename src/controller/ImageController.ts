import { NextFunction, Request, Response } from 'express'
import Log from '@lunacrew/logger'
import { collections } from '../app'
import { Delete, Get, Service, Update } from '../types/Service'
import { BadRequest, NotFound } from '../error/CustomError'
import CreateImageService from '../service/CreateImageService'
import GetImageService from '../service/GetImageService'
import UpdateImageService from '../service/UpdateImageService'
import DeleteImageService from '../service/DeleteImageService'
import HttpStatus from '../enum/HttpStatus'

export default class ImageController {
  /**
   * Public method to get all images
   * @returns Json response
   */
  public static readonly getAllImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: Get = GetImageService.execute(req, next)
      if (!query?.data) return

      const result = await collections.images.find(query.data).skip((query.page - 1) * query.limit).limit(query.limit).toArray()

      if (result) {
        if (query.language) {
          result.forEach((element) => {
            element.alt = element.alt[query.language as string]
          })
        }

        res.status(HttpStatus.code.OK).json({
          page: query.page,
          limit: query.limit,
          items: result.length,
          data: result
        })
      } else {
        next(new NotFound(HttpStatus.message[404]))
        next()
      }
      Log.i('ImageController :: Calling Endpoint :: GetImage')
    } catch (error) {
      Log.e(`${error}`, 'ImageController :: GetImage')
    }
  }

  /**
   * Public method to get random image
   * @returns Json response
   */
  public static readonly getRandomImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: Get = GetImageService.execute(req, next)
      if (!query?.data) return

      const result = await collections.images.aggregate([{ $sample: { size: 1 } }]).toArray()

      if (result) {
        if (query.language) {
          result[0].alt = result[0].alt[query.language]
        }
        res.status(HttpStatus.code.OK).json(result[0])
      } else {
        next(new NotFound(HttpStatus.message[404]))
        next()
      }
      Log.i('ImageController :: Calling Endpoint :: GetRandomImage')
    } catch (error) {
      Log.e(`${error}`, 'ImageController :: GetRandomImage')
    }
  }

  /**
   * Admin method to create image
   */
  public static readonly createImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const image: Service = CreateImageService.execute(req, next)
      if (!image) return

      const result = await collections.images.insertOne(image)

      if (result) {
        res.status(HttpStatus.code.CREATED).json({ id: result.insertedId })
      } else {
        next(new BadRequest(HttpStatus.message[400]))
        next()
      }

      Log.i('ImageController :: Calling Endpoint :: CreateImage')
    } catch (error) {
      Log.e(`${error}`, 'ImageController :: CreateImage')
    }
  }

  /**
   * Admin method to delete image
   */
  public static readonly deleteImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: Delete = DeleteImageService.execute(req, next)
      if (!query?.filter) return

      const result = await collections.images.deleteOne(query.filter)

      if (result?.deletedCount) {
        res.status(HttpStatus.code.NO_CONTENT).send()
      } else {
        next(new NotFound(HttpStatus.message[404]))
        next()
      }
      Log.i('ImageController :: Calling Endpoint :: DeleteImage')
    } catch (error) {
      Log.e(`${error}`, 'ImageController :: DeleteImage')
    }
  }

  /**
   * Admin method to update image
   */
  public static readonly updateImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: Update = UpdateImageService.execute(req, next)
      if (!query?.filter || !query.data) return

      const result = await collections.images.findOneAndUpdate(query.filter, query.data, { returnDocument: 'after' })

      if (result) {
        res.status(HttpStatus.code.OK).json(result)
      } else {
        next(new NotFound(HttpStatus.message[404]))
        next()
      }

      Log.i('ImageController :: Calling Endpoint :: UpdateImage')
    } catch (error) {
      Log.e(`${error}`, 'ImageController :: UpdateImage')
    }
  }
}
