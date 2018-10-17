const HTTPVerbs = {
    GET: 'GET',
    POST: 'POST'
};

const isMethodInEnum = (method) => {
    for (const methodFromEnum in HTTPVerbs) {
        if (method === HTTPVerbs[methodFromEnum]) return true;
    }
    return false;
};

const makeAjaxRequest = (method, url, successCallback, errorCallback) => {
    if (isMethodInEnum(method) && typeof(url) === 'string') {
        const request = new XMLHttpRequest();
        request.open(method, url, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                if (typeof(successCallback) === 'function') successCallback(request.response);
            } else {
                if (typeof(errorCallback) === 'function') errorCallback(request.status, request.statusText);
            }
        };

        request.onerror = () => {
            if (typeof(errorCallback) === 'function') errorCallback(request.status, request.statusText);
        };

        request.send();
    }
};

