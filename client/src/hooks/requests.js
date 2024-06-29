const API_URl = 'http://localhost:8000'

async function httpGetPlanets() {

  const response = await fetch(`${API_URl}/planets`);
  return await response.json();

}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URl}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try{return await fetch(`${API_URl}/launches`, {
    method: "post",
    headers :{
      "Content-Type":'application/json',
    },
    body:JSON.stringify(launch),
  })
  }
  catch(err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{return await fetch(`${API_URl}/launches/${id}`, {
    method :'delete',
  })
  } catch(error) {
    return {
      ok :false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};