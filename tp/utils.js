const show = (refOrId) => {
	if (typeof refOrId === "string") elem = document.getElementById(refOrId);
    elem.style.display = "block";
};

const hide = (refOrId) => {
	if (typeof refOrId === "string") elem = document.getElementById(refOrId);
    elem.style.display = "none";
};

const html = (refOrId, contenu) => {
	if (typeof refOrId === "string") {
        elem = document.getElementById(refOrId);
        if (contenu != null) elem.innerHTML = contenu;
        else return elem.innerHTML;
    }
};

const val = (refOrId, contenu) => {
	if ((typeof refOrId) === "string") {
        elem = document.getElementById(refOrId);
        if (elem.type === "checkbox") {
            if (contenu != null && (contenu === true || contenu === false)) elem.checked = contenu;
            else return elem.checked;
            return;
        }

        if (contenu != null) elem.value = contenu;
        else return elem.value;
    }
};




