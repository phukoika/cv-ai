import { Router } from 'express'
import { LoginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, LoginController)
usersRouter.post('/register', registerValidator, registerController)
/**
 * Method: POST
 * Description: Register a user
 * Path: /users/register
 * Body: {email: string, password: string, confirmPassword: string}
 */

export default usersRouter
