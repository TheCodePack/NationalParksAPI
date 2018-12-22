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

function getParks (query, limit) {
    const params = {
        api_key: apiKey,
        q:query,
        limit
    };
    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;

    console.log(url);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayParks(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      const maxResults = $('#js-max-results').val();
      getParks(searchTerm, limit);
    });
  }
  
  $(watchForm);

