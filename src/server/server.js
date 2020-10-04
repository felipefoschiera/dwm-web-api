// Utilizar o express
const express = require('express');
// Utilizar o mongo
require('./banco/mongo');

const port = process.env.PORT || 3001;

const routes = require('./routes/index');
const app = express();
var cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json());
app.use(routes);

app.listen(port, () => {
    return console.log("API de serviços executando na porta " + port);
});
