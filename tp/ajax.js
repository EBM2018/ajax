let _request = false;
let _fnCb = null;

const ajax = (oParams) => {
    let donneesFormattees = '';
    for (const propriete in oParams.data) donneesFormattees += `${propriete}=${encodeURIComponent(oParams.data[propriete])}`;
	envoiRequete(oParams.type, oParams.url, donneesFormattees, oParams.callback);
};

// Attention : on ne peut faire qu'une seule requête à la fois
const envoiRequete = (type, url, donnees, callback) =>
{
    _request = new XMLHttpRequest();
	_fnCb = callback;

	if (type === 'GET') {
		_request.open("GET", `${url}?${donnees}`, true);
		donnees = null;
	} else {
		_request.open("POST", url, true);
		_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		/*
		// provoque des erreurs sous Windows...
		_request.setRequestHeader("Content-length", donnees.length);
		_request.setRequestHeader("Connection", "close");
		*/
	}

	_request.onreadystatechange = traiteReponse;
	_request.send(donnees);
};

const traiteReponse = () =>
{
	// alert(_request.readyState); // A décommenter...
	if (_request.readyState === 4)
	{
	    if (_request.status === 200)
	    {
			var donnee = _request.responseText;
			_fnCb(donnee); 
	    }
	}
};
