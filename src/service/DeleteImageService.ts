import { NextFunction, Request } from 'express'
import Log from '@lunacrew/logger'
import { Delete } from '../types/Service'
import { paramsSchema } from '../schema/imageSchema'
import { ValidationError } from '../error/CustomError'

export default class DeleteImageService {
  static execute(req: Request, next: NextFunction): Delete {
    try {
      const query: { $and: Array<object> } = { $and: [] }
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
        query.$and.push({ _id: value.id })
      }

      return { filter: query }
    } catch (error) {
      Log.e(`${error}`, 'UpdateImageService')
    }
  }
}
