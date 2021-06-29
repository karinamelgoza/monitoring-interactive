const { Console } = require('console')
const express = require('express')
const path = require('path')
const app = express()
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '5d6d15ad7a9946efbf7b45fa5174faa7',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

app.use(express.json())

app.get('/', (req, res) => {
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545
app.listen(port, () => {
    console.log(`server running on ${port}`)
})