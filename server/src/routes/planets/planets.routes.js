const express = require('express');

const {httpgetAllPlanets} = require('./planets.controller')

const PlanetsRouter = express.Router();

PlanetsRouter.get('/', httpgetAllPlanets);

module.exports = PlanetsRouter;