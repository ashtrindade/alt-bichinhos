import { Request, Response, NextFunction } from 'express'
import Log from '@lunacrew/logger'
import HttpStatus from 'src/enum/HttpStatus'
import admin from 'src/middleware/admin'

describe('admin middleware', () => {
  let req: Request
  let res: Response
  let next: NextFunction

  beforeEach(() => {
    req = {} as Request
    res = {} as Response
    next = jest.fn() as NextFunction
  })

  it('should call next() if the admin token is valid', () => {
    req.headers = { admin_token: process.env.ADMIN_TOKEN }

    admin(req, res, next)

    expect(next).toHaveBeenCalled()
  })

  it('should return 403 Forbidden if the admin token is invalid', () => {
    req.headers = { admin_token: 'invalid_token' }
    res.status = jest.fn().mockReturnThis()
    res.json = jest.fn()
    jest.spyOn(Log, 'custom').mockImplementation()
    admin(req, res, next)

    const log = {
      message: 'Forbidden',
      status: HttpStatus.message[403],
      url: req.url,
      method: req.method,
      headers: req.headers,
      body: req.body
    }

    expect(res.status).toHaveBeenCalledWith(HttpStatus.code.FORBIDDEN)
    expect(res.json).toHaveBeenCalledWith({ message: HttpStatus.message[403] })
    expect(Log.custom).toHaveBeenCalledWith(`${log}`, { tag: 'ValidateAdmin', tagColor: 'red', tagIcon: 'FORBIDDEN', iconColor: 'red' })
  })
})
