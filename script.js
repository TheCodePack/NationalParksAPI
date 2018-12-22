'use strict'

const apiKey = 'a8HjUpjp6WFsYACczuSrhpPf8ExZDsXKI8VdztdL'

const searchURL = 'https://developer.nps.gov/api/v1/parks'

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function displayParks(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
}

