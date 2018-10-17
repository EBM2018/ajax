<?php

echo "La page data a été appelée par la méthode " . $_SERVER["REQUEST_METHOD"] . "\n"; 
if (isset($_REQUEST["saisie"]))
	echo "Texte reçu : " . $_REQUEST["saisie"]; 
else 
	echo "Aucun texte reçu"; 
?>
