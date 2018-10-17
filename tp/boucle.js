const ulDOMElement = document.querySelector('ul');

const defaultParameters = {
    period: 5,
    toLoop: () => {console.log('test');},
    toContinue: () => {return true;}
};

const fillMissingParameters = (parameters) => {
    for (const property in defaultParameters) {
        if (parameters[property] == null) parameters[property] = defaultParameters[property];
    }
}

const loop = (parameters) => {
    if (parameters != null) {
        fillMissingParameters(parameters);
        if (parameters.toContinue()) {
            parameters.toLoop();
            window.setTimeout(() => loop(parameters), parameters.period * 1000);
        }
    }
}

const addElementInList = () => {
    ulDOMElement.innerHTML += '<li>test</li>';
}

loop({
    period: 2,
    toLoop: addElementInList
});
