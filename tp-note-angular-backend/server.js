import express from "express";
import {getPort} from "./app/utils/portUtils.js";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import {swaggerDoc} from './app/openapi/openapi.js';
import {RESTModule} from "./app/RESTModule.js";


const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc,{explorer: true}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
    next();
});



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/test',  (req, res) => {
    res.status(200);
    res.send('Application opérationnelle !')
})

const REST = new RESTModule("REST server", app, getPort());
REST.init();
