//this page contains the fetch method to get the data from the database on the other server
function fetchBugs(cb) {
  return fetch(`/bugList`, { //says to go to the bugList page of the backend server like in the app.js file where the data will be returned
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) { //function the handle the request or throw an error if something goes wrong
  if (response.status >= 200 && response.status < 2000) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) { //function makes sure the returned object is in json format
  return response.json();
}

const Client = { fetchBugs };
export default Client;//exports the methods in this file
