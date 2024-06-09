import { NextFunction, Request } from 'express'
import Log from '@lunacrew/logger'
import { Update } from '../types/Service'
import { imageSchema, paramsSchema } from '../schema/imageSchema'
import { ValidationError } from '../error/CustomError'

export default class UpdateImageService {
  static execute(req: Request, next: NextFunction): Update {
    try {
      let data: { $set: object } | null
      let filter: object = {}
      const { error, value } = paramsSchema.validate(req.params)

      if (error) {
        next(new ValidationError(error.details.map((detail) => {
          const key = detail.context?.key ?? ''
          return {
            [key]: detail.message
          }
        })))
        next()
        return null
      } else {
        filter = { _id: value.id }
        data = this._buildData(req, next)
      }

      return { filter, data }
    } catch (error) {
      Log.e(`${error}`, 'UpdateImageService')
    }
  }

  private static _buildData(req: Request, next: NextFunction): { $set: object } | null {
    const { error, value } = imageSchema.validate(req.body)
    const data: { $set: object } = { $set: {} }

    if (error) {
      next(new ValidationError(error.details.map((detail) => {
        const key = detail.context?.key ?? ''
        return {
          [key]: detail.message
        }
      })))
      next()

      return null
    } else {
      data.$set = value
    }
    return data
  }
}
