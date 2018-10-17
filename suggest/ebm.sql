-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 17 Octobre 2018 à 11:49
-- Version du serveur :  5.7.23-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `suggest_ebm`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `id` int(11) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `formation` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `etudiants`
--

INSERT INTO `etudiants` (`id`, `prenom`, `nom`, `formation`) VALUES
(1, 'Cyril', 'BRAJON', 'Centrale'),
(2, 'Florian', 'HEYMES', 'Centrale'),
(3, 'Baptiste', 'LALANNE UGALDE', 'Centrale'),
(4, 'Simon', 'LEDER', 'Centrale'),
(5, 'Maxime', 'LEGAL', 'Centrale'),
(6, 'Quentin', 'LEULIET', 'Centrale'),
(7, 'Nathan', 'MALNOURY', 'Centrale'),
(8, 'Hamza', 'OUHSSAINE', 'Centrale'),
(9, 'Gabin', 'VALLET', 'Centrale'),
(10, 'Valentin', 'CHION', 'Iteem'),
(11, 'Baptiste', 'DEBEVER', 'Iteem'),
(12, 'Felix', 'DELCOURT', 'Iteem'),
(13, 'Nans', 'DUMORTIER', 'Iteem'),
(14, 'Hugo', 'MOTTEZ', 'Iteem'),
(15, 'Axel', 'VANET MAS', 'Iteem'),
(16, 'Arthur', 'WIRBEL', 'Iteem'),
(17, 'Thomas', 'BOURDEAUD\'HUY', 'Centrale');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
