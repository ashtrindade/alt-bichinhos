import { NextFunction, Request } from 'express'
import { v4 as newUUID } from 'uuid'
import Log from '@lunacrew/logger'
import { Service } from '../types/Service'
import { PetImage } from '../types/PetImage'
import { imageSchema } from '../schema/imageSchema'
import { ValidationError } from '../error/CustomError'

export default class CreateImageService {
  static execute(req: Request, next: NextFunction): Service {
    try {
      const { error, value } = imageSchema.validate(req.body)

      if (error) {
        next(new ValidationError(error.details.map((detail) => {
          const key = detail.context?.key ?? ''
          return {
            [key]: detail.message
          }
        })))
        next()
      } else {
        return this._buildQuery(value)
      }
    } catch (error) {
      Log.e(`${error}`, 'CreateImageService')
      return null
    }
  }

  private static _buildQuery(pet: PetImage): object {
    pet._id = newUUID()
    return pet
  }
}
