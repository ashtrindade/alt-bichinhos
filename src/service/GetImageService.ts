import { NextFunction, Request } from 'express'
import Log from '@lunacrew/logger'
import { Get } from '../types/Service'
import { paramsSchema } from '../schema/imageSchema'
import { ValidationError } from '../error/CustomError'

export default class GetImageService {
  static execute(req: Request, next: NextFunction): Get {
    try {
      let query: object = {}
      const params = {
        language: req.query.language,
        type: req.query.type,
        page: req.query.page,
        limit: req.query.limit
      }

      const { error, value } = paramsSchema.validate(params)

      if (error) {
        next(new ValidationError(error.details.map((detail) => {
          const key = detail.context?.key ?? ''
          return {
            [key]: detail.message
          }
        })))
        next()
      } else {
        if (value.type) query = { type: value.type }

        return {
          data: query,
          language: value.language ?? null,
          page: value.page,
          limit: value.limit
        }
      }
    } catch (error) {
      Log.e(`${error}`, 'GetImageService')
    }
  }
}
