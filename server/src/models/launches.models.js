
const launches = new Map()

let latestFlightNumber = 100;

function ifLaunchExists(launchID){
    return launches.has(launchID);
}
    

const launch = {
    flightNumber: 100,
    mission: 'tony rocket',
    launchDate: new Date('december 17 ,20230'),
    rocket:'tonypr',
    target:'Kepler-1652 b',
    customer:['nasa','ztm'],
    upcoming:true,
    sucess:true,
}
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch ,{
        flightNumber: latestFlightNumber,
        customer: ['tony', 'nasa'],
        upcoming: true,
        sucess:true,
    }))
};
function abortedLaunch(launchID) {
    const aborted = launches.get(launchID);
    aborted.upcoming = false;
    aborted.sucess = false
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    ifLaunchExists,
    abortedLaunch
}