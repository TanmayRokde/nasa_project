const cors = require('cors');

const path = require('path')

const morgan = require('morgan');
const express = require('express');

const app = express();

const PlanetsRouter = require('./routes/planets/planets.routes');
const  {launchesRouter}  = require('./routes/launches/launches.routes');



app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets',PlanetsRouter);
app.use('/launches',launchesRouter);



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;