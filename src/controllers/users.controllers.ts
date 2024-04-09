import { NextFunction, Request, Response } from 'express'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const LoginController = (req: Request, res: Response) => {
  res.json({
    message: 'Login successful'
  })
}
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await usersService.register(req.body)
    return res.json({
      errors: 'Register successfuly',
      result
    })
  } catch (error) {
    return res.status(400).json({
      errors: 'Register failed'
    })
  }
}
