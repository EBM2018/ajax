<?php

include_once("libs/maLibUtils.php");
include_once("libs/maLibSQL.pdo.php"); 
// à modifier éventuellement 
// au niveau de l'inclusion du fichier config.php

$data = array(); 

$cherche = valider("debutNom"); 
$data["debutNom"] = $cherche; 

$SQL = "SELECT * FROM etudiants WHERE ";
$SQL .= " prenom LIKE '$cherche%' ";
$SQL .= " OR nom LIKE '$cherche%' ";
$SQL .= " OR SOUNDEX(nom) = SOUNDEX('$cherche') ";
$SQL .= " OR SOUNDEX(prenom) = SOUNDEX('$cherche') ";
 
// Trouver les étudiants dont : 
// le prenom commence par ...
// le nom commence par ...
// le prenom se prononce comme ...
// le nom se prononce comme ...
// 									... la chaine debutNom  

$data["etudiants"] = parcoursRs(SQLSelect($SQL)); 
echo json_encode($data);
?>


