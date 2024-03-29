//const API_URL = 'http://localhost:3001';
const API_URL = "https://weman-connect-sagf.mybluemix.net";

function parseResponse(response) {
    return response.json();
}

function checkResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`Fetch error: ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
}

function handleError(error) {
    console.log(error);
    return [];
}
function createQuery(queryObject) {
    return `?${Object.keys(queryObject)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
        .join('&')}`;
}

function getData(path) {
    return fetch(`${API_URL}/${path}`).then(checkResponse).then(parseResponse).catch(handleError);
}

function getDataWithQuery(path, queryObject) {
    return getData(`${path}${createQuery(queryObject)}`);
}

function postData(path, data) {
    return fetch(
        `${API_URL}/${path}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(checkResponse).then(parseResponse);
}

function patchData(path, id, data) {
    return fetch(
        `${API_URL}/${path}/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(checkResponse).then(parseResponse).catch(handleError);
}

function deleteData(path, id) {
    return fetch(
        `${API_URL}/${path}/${id}`,
        {
            method: 'DELETE',
        });
}



export  {
    getData,
    getDataWithQuery,
    postData,
    patchData,
    deleteData,
};