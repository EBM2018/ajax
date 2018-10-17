var _boucle_iPeriode = null;
var _boucle_fnCbTraitement = null;
var _boucle_fnCbContinuer = null;
 

// NB : préférer utiliser setInterval plutôt que setTimeout
// Attention : on ne peut faire qu'un seul traitement périodique à la fois

//TODO: refactoriser boucle([periode],traitement,[poursuite])

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
