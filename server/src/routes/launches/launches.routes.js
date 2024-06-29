const express = require('express');
const {httpgetAllLaunches,httpaddNewlaunch,httpAbortLaunch} =  require('../launches/launches.controller')
const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches);
launchesRouter.post('/', httpaddNewlaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = {
    launchesRouter,
}
