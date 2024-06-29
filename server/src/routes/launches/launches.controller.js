const {getAllLaunches,addNewLaunch,ifLaunchExists, abortedLaunch} = require('../../models/launches.models')

function httpgetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}
function httpaddNewlaunch(req, res) {


    const launch = req.body;

    if (!launch.mission || !launch.launchDate || !launch.rocket || !launch.target) {
        return res.status(400).json({
            Error : 'data is incomplete'
        })
    }


    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            Error:'enter valid date'
        })
    }
    addNewLaunch(launch);

    return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  const existsLaunch = await ifLaunchExists(launchId);
  if (!existsLaunch) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }

  const aborted = await abortedLaunch(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: 'Launch not aborted',
    });
  }

  return res.status(200).json({
    ok: true,
  });
}


module.exports = {
    httpgetAllLaunches,
    httpaddNewlaunch,
    httpAbortLaunch
}