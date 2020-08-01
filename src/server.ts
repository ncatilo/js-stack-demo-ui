import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.resolve('./public')));

app.get('/', (request, response) => {

    const file = path.resolve('./public/index.html')

    response.sendFile(file);
});

var port = 3333

app.listen(port, () => {

    console.log(`Started on port ${port}`)
});