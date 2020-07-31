import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {

    response.sendFile(path.join(__dirname + '/public/index.html'));
});

var port = 3333

app.listen(port, () => {

    console.log(`Started on port ${port}`)
});