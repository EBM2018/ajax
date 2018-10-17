const searchUrl = './search';
const searchBarInputElement = document.getElementById('search-bar-input');
const searchBarControlDiv = document.getElementById('search-bar-control-div');
const suggestionsListElement = document.getElementById('suggestions-list');
const userIconHtmlSnippet = '<i class="fas fa-user"></i>';
const infoSpan = document.getElementById('info-span');
const noSuggestionSpan = document.getElementById('no-suggestion-span');

const addSearchBarInputListener = () => {
    searchBarInputElement.addEventListener('keyup', () => handleSearchBarInputChange());
};

const handleSearchBarInputChange = () => {
    searchBarControlDiv.classList.add('is-loading');
    const query = searchBarInputElement.value;
    if (query.length > 0) {
        infoSpan.classList.add('is-hidden');
        makeAjaxRequest(HTTPVerbs.GET, searchUrl, displaySearchResult, handleSearchError())
    } else {
        infoSpan.classList.remove('is-hidden');
        suggestionsListElement.innerHTML = '';
    }
};

const displaySearchResult = (response) => {
    searchBarControlDiv.classList.remove('is-loading');
    response = JSON.parse(response);
    suggestionsListElement.innerHTML = '';
    if (response.length > 0) {
        noSuggestionSpan.classList.add('is-hidden');
        for (const match of response) suggestionsListElement.innerHTML += `<li>${userIconHtmlSnippet} ${match}</li>`;
    } else noSuggestionSpan.classList.remove('is-hidden');
};

const handleSearchError = (response) => {
    searchBarControlDiv.classList.remove('is-loading');
    if (response != null) {

    } else {

    }
};

addSearchBarInputListener();
