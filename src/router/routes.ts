import express, { Application, Router, Request, Response } from 'express'
import ImageController from '../controller/ImageController'
import rateLimiter from '../middleware/rateLimiter'
import admin from '../middleware/admin'
import swaggerUi from 'swagger-ui-express'
import * as swaggerFile from '../../docs/swagger.json'

const userRouter: Router = Router()

const routes = (app: Application) => {
  app
    .use(express.json())
    .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app
    .get('/', (_req: Request, res: Response) => {
      res.send({ status: 'API is OK!', docs: '/api/docs' })
    })

    .get(
      '/api/image/all',
      rateLimiter,
      ImageController.getAllImage,
      userRouter
    )

    .get(
      '/api/image/random',
      rateLimiter,
      ImageController.getRandomImage,
      userRouter
    )

    .get(
      '/api/image/:id',
      rateLimiter,
      ImageController.getImageById,
      userRouter
    )

    .post(
      '/api/admin/image',
      rateLimiter,
      admin,
      ImageController.createImage,
      userRouter
    )

    .delete(
      '/api/admin/image/:id',
      rateLimiter,
      admin,
      ImageController.deleteImage,
      userRouter
    )

    .put(
      '/api/admin/image/:id',
      rateLimiter,
      admin,
      ImageController.updateImage,
      userRouter
    )
}

export { routes }
