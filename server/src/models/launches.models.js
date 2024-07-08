const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo');



const DEFAULT_NUMBER = 100;

async function ifLaunchExists(launchID){
    return await launchesDatabase.findOne({
        flightNumber:launchID
    });
}

async function latestFlightNumer() {
    const lastestNumber = await launchesDatabase.findOne().sort('-flightNumber')
    if (!lastestNumber) {
        return DEFAULT_NUMBER
    }
    return lastestNumber.flightNumber;
}
    

const launch = {
    flightNumber: 100,
    mission: 'tony rocket',
    launchDate: new Date('december 17 ,20230'),
    rocket:'tonypr',
    target:'Kepler-1652 b',
    customers:['nasa','ztm'],
    upcoming:true,
    sucess:true,
}
saveLaunch(launch);

async function getAllLaunches() {
    return await launchesDatabase.find({},{'_id':0,'__v':0})
 
}
async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplarName : launch.target
    })
    if (!planet) {
        throw new Error('target not found')
    }
    await launchesDatabase.updateOne({flightNumber:launch.flightNumber},launch,{upsert:true})
}

// function addNewLaunch(launch) {
//     latestFlightNumber++;
//     launches.set(latestFlightNumber, Object.assign(launch ,{
//         flightNumber: latestFlightNumber,
//         customer: ['tony', 'nasa'],
//         upcoming: true,
//         sucess:true,
//     }))
// };
async function saveNewLaunch(launch) {
    const newFlightNumber = await latestFlightNumer() + 1;

    const newLaunch = Object.assign(launch, {
        flightNumber: newFlightNumber,
        customer: ['tony','nasa'],
        upcoming: true,
        sucess: true,
    })

    await saveLaunch(newLaunch);
}


async function abortedLaunch(launchID) {
    return await launchesDatabase.updateOne({
        flightNumber:launchID
    }, {     $set: { upcoming: false, success: false } })
}

module.exports = {
    getAllLaunches,
    saveNewLaunch,
    ifLaunchExists,
    abortedLaunch
}