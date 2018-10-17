<?php
require_once '../vendor/autoload.php';

$EBMMembersNames = [
    'Thomas Bourdeaud\'huy',
    'Cyril Brajon',
    'Baptiste Debever',
    'Felix Delcourt',
    'Nans Dumortier',
    'Florian Heymes',
    'Baptiste Lalanne',
    'Baudouin Laloux',
    'Simon Leder',
    'Maxime Legal',
    'Quentin Leuliet',
    'Nathan Malnoury',
    'Hugo Mottez',
    'Hamza Ouhssaine',
    'Gabin Vallet',
    'Axel Vanet-Mas',
    'Arthur Wirbel'
];

if (isset($_GET['q'])) {
    // sleep(10); // Uncomment this line to test the loading icon
    $fuse = new \Fuse\Fuse($EBMMembersNames, [
        "threshold" => 0.4
    ]);

    $fuseResultsIds = $fuse->search($_GET['q']);
    $fuseResults = [];
    foreach ($fuseResultsIds as $fuseResultsId) array_push($fuseResults, $EBMMembersNames[$fuseResultsId]);

    echo json_encode($fuseResults);
} else http_response_code(422);
