var _boucle_iPeriode = null;
var _boucle_fnCbTraitement = null;
var _boucle_fnCbContinuer = null;
 

// NB : préférer utiliser setInterval plutôt que setTimeout
// Attention : on ne peut faire qu'un seul traitement périodique à la fois

//TODO: refactoriser bouclev2({[periode],traitement,[poursuite]})

// snake_case  : default_config 

var defaultConfig = {
	periode : 5, 
	traitement : function(){console.log("traitement"); }, 
	poursuite : function(){		console.log("poursuite");
								return true; } 
}; 

// camlCase premierEnMinusculesLesAutresCommencentParUneMajuscule
var currentConfig = {}; 

function enrichir(objetModele, objetModifications) {
	// renvoyer un *nouvel* objet
	// contenant les propriétés de l'objetModele
	// associées aux valeurs de objetModifications
	// si elles sont fournies
	// sinon à celles de l'objet Modele 

	var oRes = {}; 
	for (prop in objetModele) {
		if (objetModifications[prop] != undefined)
			oRes[prop] = objetModifications[prop]; 
		else 
			oRes[prop] = objetModele[prop]; 
	}
	return oRes; 
	// NB si vous manipulez des objets dont les propriétés ne contiennent pas de références vers d'autres objets, 
	// JS propose JSON.parse(JSON.stringify(objet)) pour cloner 
	// (ne marche pas avec des méthodes dans les objets)

	// JS6 propose o.assign() qui ne fonctionne que sur un niveau de profondeur de copie 
	// En cas d'objets plus complexes (ie dont certaines propriétés contiennent des références vers d'autres objets), on parlerait de "deep copy" ce qui est une mauvaise pratique (préférer des constructeurs...) 
}

// TODO : 1) développer la fonction 
// 2) développer des exemples d'appel permettant de vérifier 
// que votre code fonctionne 
function bouclev2(oConfig) {
	// lors du premier appel, l'objet oConfig peut ne pas contenir l'ensemble des propriétés attendues. Dans ce cas, on utilise les propriétés de config. par défaut 

	if (oConfig != null) {
		currentConfig = enrichir(defaultConfig, oConfig); 
/*
		currentConfig = defaultConfig;
		// prise de référence !!! 
		// toutes les modifications de currentConfig ultérieures
		// modifieront aussi l'objet par défaut !! 
		if (oConfig.periode != undefined) 
			currentConfig.periode = 1000 * oConfig.periode; 
		if (oConfig.traitement != undefined) 
			currentConfig.traitement = oConfig.traitement; 
		if (oConfig.poursuite != undefined) 
			currentConfig.poursuite = oConfig.poursuite; 
*/
	}

	if (currentConfig.poursuite()){
		currentConfig.traitement();
		window.setTimeout(bouclev2,1000*currentConfig.periode);
	}
}


function boucle(iPeriode,fnCbTraitement, fnCbContinuer){
	// appelle la fonction de traitement à chaque periode, tant que la fonction continuer renvoie 'vrai'

	if (iPeriode != null) {
		// sauvegarder dans des variables globales
		// les arguments de la fonction boucle
		// lors du premier appel à la fonction 
		_boucle_iPeriode = iPeriode*1000;
		_boucle_fnCbTraitement = fnCbTraitement;
		_boucle_fnCbContinuer = fnCbContinuer;
	}

	// si la fnCbContinuer n'est pas fournie
	// on ne s'arrête jamais

	// appeler fn continuer
	if (	(_boucle_fnCbContinuer == null)	
			||  (_boucle_fnCbContinuer())		){
		// appeler fn de traitement 
		_boucle_fnCbTraitement();
		// preparer l'appel de la fonction boucle
		// apres un délai iPeriode
		window.setTimeout(boucle,_boucle_iPeriode);
	}	
}

console.log("librairie boucle chargee");
