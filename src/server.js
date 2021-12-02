const express = require('express')
const path = require('path')
const app = express();
const port = process.env.PORT || 3333

app .use(express.static(path.resolve('./public')))

    .get('/', (request, response) => {

        const file = path.resolve('./public/index.html')

        response.sendFile(file)

    })
    
    .listen(port, () => {

        console.log(`Started on port ${port}`)
    })