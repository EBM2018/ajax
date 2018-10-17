var _request = false;
var _fnCb = null; 

// TODO:
// produire un andler 'ajax' pour la fonction envoiRequete 
// Il admettra un paramètre sous forme de JSON
// Type & url seront facultatifs
// Les données seront passées par json également, par exemple {''debutNom'':''T''} au lieu de «debutNom=T». 

function ajax (oParams) {

	
}

// Attention : on ne peut faire qu'une seule requête à la fois
function envoiRequete(type,url,donnees,callback)
{
	_request = new XMLHttpRequest(); 
	_fnCb = callback;

	if (type=='GET') 
	{
		_request.open("GET", url+"?"+donnees, true);
		donnees=null;
	}
	else 
	{
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
}

function traiteReponse()
{
	// alert(_request.readyState); // A décommenter...
	if (_request.readyState == 4) 
	{
	    if (_request.status == 200) 
	    {
			var donnee = _request.responseText;
			_fnCb(donnee); 
	    }
	}
} 

console.log("librairie ajax chargee");
