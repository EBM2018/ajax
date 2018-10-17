function show(refOrId) {
	// Utiliser typeof pour connaître le type du paramètre refOrId
	if ((typeof refOrId) == "string") {
		refOrId = document.getElementById(refOrId);
	}
	refOrId.style.display = "block";
}
function hide(refOrId) {
	if ((typeof refOrId) == "string") {
		refOrId = document.getElementById(refOrId);
	}
	refOrId.style.display = "none";
}
function html(refOrId, contenu) {
	if ((typeof refOrId) == "string") {
		refOrId = document.getElementById(refOrId);
	}

	// Comparer contenu à 'null' pour savoir si cet argument est fourni
	if (contenu != null) {
		// un contenu est fourni
		// on l'utilise pour affecter une valeur à la balise refOrId
		// c'est une balise => on utilise la propriété innerHTML
		refOrId.innerHTML = contenu;
	}
	else {
		// pas de contenu : on renvoie la valeur de la balise refOrId
		return refOrId.innerHTML;
	}
}
function val(refOrId, contenu) {
	// val renvoie la propriété value pour champs input text, button ...
	// [OPTIONNEL] renvoie vrai ou faux SI case à cocher (input type=checkbox)

	if ((typeof refOrId) == "string") {
		refOrId = document.getElementById(refOrId);
	}

	// la propriété 'checked' permet de connaître l'état de la case 
	// comment distinguer les input text des input checkbox ?
	// => propriété type 
	if (refOrId.type =="checkbox") {
		if (contenu != null) { 
			// contenu doit valoir vrai ou faux
			refOrId.checked = contenu; 
		} else return refOrId.checked;
		return;
	}

	// Comparer contenu à 'null' pour savoir si cet argument est fourni
	if (contenu != null) {
		// un contenu est fourni
		// on l'utilise pour affecter une valeur à la balise refOrId
		// c'est une balise => on utilise la propriété innerHTML
		refOrId.value = contenu;
	}
	else {
		// pas de contenu : on renvoie la valeur de la balise refOrId
		return refOrId.value;
	}
}

console.log("Chargement librairie utils.js OK");




