const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
require('dotenv').config()
const swaggerui = require('swagger-ui-express')
const swaggerDoc = require('swagger-jsdoc')
const authLoginController = require('./controllers/login')
const loggedInController = require('./controllers/loggedin')
const logoutCotroller = require('./controllers/logout')
const uploadController = require('./controllers/upload')
const getProgramController = require('./controllers/getProgram')
const getCampusController = require('./controllers/getCampus')
const getDayController = require('./controllers/getDays')
const getCohortsController = require('./controllers/getCohorts')
const registerController = require('./controllers/register')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const expressSession = require('express-session')
const path = require('path')
const { info } = require('console')
const { title } = require('process')
const { version } = require('os')
const upload = multer({ storage: multer.memoryStorage()  })
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
const app = new express()
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: '', 
      version: '1.0.0'
    }
  },
  apis: ['./index.js'] 
}

const swaggerDocs = swaggerDoc(swaggerOptions)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocs))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

/**
 * @swagger
 * /api/loggedIn:
 *  get:
 *    description: check if loggedin
 *    responses:
 *      200:
 *        description: ok
 *      401:
 *        description: not logged in
 */
app.get('/api/loggedIn', loggedInController)

/**
 * @swagger
 * /api/logout:
 *  get:
 *    description: logout user
 *    responses:
 *      200:
 *        description: ok
 */
app.get('/api/logout', logoutCotroller)

/**
 * @swagger
 * /api/getPrograms:
 *  get:
 *    description: get programs
 *    responses:
 *      200:
 *        description: ok
 */
app.get('/api/getPrograms', getProgramController)

/**
 * @swagger
 * /api/register:
 *  post:
 *    description: save new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                description: your user name
 *              password:
 *                type: string
 *                description: your password
 *    responses:
 *      200:
 *        description: ok 
 */
app.post('/api/register', registerController)

/**
 * @swagger
 * /api/login:
 *  post:
 *    description: login user
 *    requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Your username
 *               password:
 *                 type: string
 *                 description: Your password
 *    responses:
 *      200:
 *        description: ok
 */
app.post('/api/login', authLoginController)

/**
 * @swagger
 * /api/getCampus:
 *  post:
 *    description: get campuses
 *    requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - program
 *               - language
 *             properties:
 *               program:
 *                 type: string
 *                 description: choose program
 *                 example: ECE Early Childhood Education
 *               language:
 *                 type: string
 *                 description: choose language
 *                 example: English
 *    responses:
 *      200:
 *        description: ok
 */
app.post('/api/getCampus', getCampusController)

/**
 * @swagger
 * /api/getDay:
 *  post:
 *    description: get available days
 *    requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - program
 *               - language
 *               - campus
 *             properties:
 *               program:
 *                 type: string
 *                 description: choose program
 *                 example: ECE Early Childhood Education
 *               language:
 *                 type: string
 *                 description: choose language
 *                 example: English
 *               campus:
 *                 type: string
 *                 description: choose campus
 *                 example: point claire
 *    responses:
 *      200:
 *        description: ok
 */
app.post('/api/getDay', getDayController)

/**
 * @swagger
 * /api/recommendations:
 *  post:
 *    description: get recommended cohorts
 *    requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - program
 *               - language
 *               - campus
 *               - day
 *             properties:
 *               program:
 *                 type: string
 *                 description: choose program
 *                 example: ECE Early Childhood Education
 *               language:
 *                 type: string
 *                 description: choose language
 *                 example: English
 *               campus:
 *                 type: string
 *                 description: choose campus
 *                 example: point claire
 *               day:
 *                 type: string
 *                 description: choose days
 *                 example: Monday to Friday
 *    responses:
 *      200:
 *        description: ok
 */
app.post('/api/recommendations', getCohortsController)

/**
 * @swagger
 * /api/upload:
 *  post:
 *    description: upload excel file
 *    responses:
 *      200:
 *        description: ok
 */
app.post('/api/upload', uploadController)