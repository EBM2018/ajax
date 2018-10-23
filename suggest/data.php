<?php
if (isset($_GET["debutNom"])) 
{
	$cherche = $_GET["debutNom"]; 
	
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
			// EXO2 afficher <P> <Nom:6>
			echo "<li>";
			echo substr($tabResultats[2],0,1);
			echo ". ";  
			echo ucfirst(strtolower(substr($tabResultats[1],0,6))); 
			echo ".</li>"; 
		}
	}

	die("");
}

?>
