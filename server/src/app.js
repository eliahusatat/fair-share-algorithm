// express
const express = require('express')
const app = express()

// functions
const jsonParserSettings = require('./utils/getDefaultData').jsonParserSettings()

// modules
// const path = require('path')
// const fs = require('fs')

require('dotenv').config()
const port = process.env.PORT || 3002

// packages
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors({ origin: (origin, callback) => callback(null, true), optionsSuccessStatus: 200, credentials: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }))

// App Routes
const algoRoutes = require('./routes/algo')

// App routes
app.use('/algo', bodyParser.json(jsonParserSettings), algoRoutes)

app.listen(port, () => {
    console.log(`Node Server listening on port: ${port}`, '\n')
}).setTimeout(50000000)
