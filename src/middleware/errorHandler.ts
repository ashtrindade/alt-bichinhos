import { Request, Response, NextFunction } from 'express'
import { MongoServerError } from 'mongodb'
import Log from '@lunacrew/logger'
import BaseError from '../error/BaseError'
import { ValidationError } from '../error/CustomError'
import HttpStatus from '../enum/HttpStatus'
import MongoDBError from '../enum/MongoDbError'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  switch (true) {
    case err instanceof ValidationError: {
      return res.status(err.status).json({ error: err.message, data: err.errorData })
    }

    case err instanceof BaseError: {
      if (err.isOperational) {
        return res.status(err.status).json({
          status: err.status < HttpStatus.code.INTERNAL_SERVER_ERROR && err.status >= HttpStatus.code.BAD_REQUEST ? 'fail' : 'error',
          message: err.message
        })
      } else {
        Log.custom(`${err.stack}`, { tag: 'ErrorHandler' })
        return res.status(err.status).json({ message: HttpStatus.message[500] })
      }
    }

    case err instanceof MongoServerError: {
      if (err.code === MongoDBError.code.DUPLICATE_KEY) {
        Log.custom(`${err.stack}`, { tag: 'ErrorHandler' })
        return res.status(HttpStatus.code.CONFLICT).json({ error: HttpStatus.message[409] })
      } else {
        Log.custom(`${err.stack}`, { tag: 'ErrorHandler' })
        return res.status(HttpStatus.code.INTERNAL_SERVER_ERROR).json({ error: HttpStatus.message[500] })
      }
    }

    case err instanceof SyntaxError: {
      Log.custom(`${err.stack}`, { tag: 'ErrorHandler' })
      return res.status(HttpStatus.code.BAD_REQUEST).json({ error: HttpStatus.message[400] })
    }

    default: {
      Log.custom(`${err.stack}`, { tag: 'ErrorHandler' })
      return res.status(HttpStatus.code.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
  }
}

export { errorHandler }
