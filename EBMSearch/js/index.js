const searchUrl = './search/index.php';
const searchBarInputElement = document.getElementById('search-bar-input');
const searchBarControlDiv = document.getElementById('search-bar-control-div');
const suggestionsListElement = document.getElementById('suggestions-list');
const userIconHtmlSnippet = '<i class="fas fa-user"></i>';
const infoSpan = document.getElementById('info-span');
const noSuggestionSpan = document.getElementById('no-suggestion-span');
const errorsBar = document.getElementById('errors-bar');
const errorContentDiv = document.getElementById('error-content');

const addSearchBarInputListener = () => {
    searchBarInputElement.addEventListener('keyup', handleSearchBarInputChange);
};

const handleSearchBarInputChange = () => {
    const query = searchBarInputElement.value;
    noSuggestionSpan.classList.add('is-hidden');
    if (query.length > 0) {
        resetInfos();
        const requestUrl = formatRequestUrl(query);
        makeAjaxRequest(HTTPVerbs.GET, requestUrl, displaySearchResult, handleSearchError)
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

const handleSearchError = (status, statusText) => {
    searchBarControlDiv.classList.remove('is-loading');
    errorsBar.classList.remove('is-hidden');
    errorContentDiv.innerHTML = `${status} - ${statusText}`;
};

const formatRequestUrl = (query) => {
    return `${searchUrl}?q=${encodeURIComponent(query)}`;
};

const resetInfos = () => {
    searchBarControlDiv.classList.add('is-loading');
    infoSpan.classList.add('is-hidden');
    errorsBar.classList.add('is-hidden');
    errorContentDiv.innerHTML = '';
};

addSearchBarInputListener();
