import express from 'express'

const app = express()
const port = 3000

import { router as classRouter } from './routes/classesRoutes.js';
import { router as accountRouter } from './routes/classesRoutes.js';
import { router as docentiRouter } from './routes/docenti.router.js'
import { router as userRouter } from './routes/user.route.js'

import { connect } from './models/dbClasse.js';

app.use(express.json())
app.use('/class', classRouter)
app.use('/accounts', accountRouter)
app.use('/docenti', docentiRouter)
app.use('/user', userRouter)

app.listen(port, async () => {
    console.log(`Server Started on port: ${port}!`)

    // Connect to the database
    await connect()
})
