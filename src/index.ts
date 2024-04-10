import express, { NextFunction, Request, Response } from 'express'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
const app = express()
const port = 3000

databaseService.connect()
app.use(express.json())
app.use('/users', usersRouter)

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
