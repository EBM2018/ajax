<?php

$data = array(); 
$data["debutNom"] = ""; 
$data["etudiants"] = array(); 


if (isset($_GET["debutNom"])) 
{
	$cherche = $_GET["debutNom"]; 
	$data["debutNom"] = $cherche;
	
	// On va ouvrir un fichier et afficher les lignes 
	// où le prénom ou le nom contient ce texte

	$tabLignes = file("ebm.txt");
	foreach ($tabLignes as $ligne)
	{
		// EXO1 : effectuer une recherche sur nom ou prénom 
		if (
			preg_match("/^(.*):(" . $cherche . ".*):.*$/i",$ligne,$tabResultats)
		|| 
			preg_match("/^($cherche.*):(.*):.*$/i",$ligne,$tabResultats)
)
		{

// Bonne pratique : rendre client et serveur indépendants
// Structurer l'information de manière à faciliter le travail d'interprétation du client 
// 2 solutions : XML - JSON 
// ICI : JSON : 
// moins verbeux que XML 
// plus facile à interpréter par le client 

// Bonne pratique : Produire du CODE ROBUSTE 
// insensible aux variations de condition d'appel 
// ICI on renvoie TOUJOURS un flux JSON même si ce flux représente l'absence de résulats

		// pour chaque correspondance, on insère une nouvelle case dans le tableau des resultats avec nom et prénom de l'étudiant trouvé 
		$data["etudiants"][] = array(
			"prenom" => $tabResultats[2], 
			"nom" => $tabResultats[1]
			); 

		}
	}
}

echo json_encode($data);
?>
