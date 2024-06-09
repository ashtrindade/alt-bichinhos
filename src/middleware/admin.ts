import { Request, Response, NextFunction } from 'express'
import Log from '@lunacrew/logger'
import HttpStatus from '../enum/HttpStatus'

const admin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.admin_token
  if (token === process.env.ADMIN_TOKEN) {
    next()
  } else {
    const log = {
      message: 'Forbidden',
      status: HttpStatus.message[403],
      url: req.url,
      method: req.method,
      headers: req.headers,
      body: req.body
    }

    Log.custom(`${log}`, { tag: 'ValidateAdmin', tagColor: 'red', tagIcon: 'FORBIDDEN', iconColor: 'red' })
    res.status(HttpStatus.code.FORBIDDEN).json({ message: HttpStatus.message[403] })
  }
}

export default admin
