<!-- survey.php -->

<?php

define('DB_NAME', 'Survey');
define('DB_USER', 'root');
define('DB_PASSWORD', 'Nedyarb94');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);


if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
	die(DB_NAME . ' not useable: ' . mysql_error());
}


$firstName = mysql_real_escape_string($_POST['firstName']);
$lastName = mysql_real_escape_string($_POST['lastName']);
$email = mysql_real_escape_string($_POST['email']);
$zipCode = mysql_real_escape_string($_POST['zipCode']);
$homeowner = mysql_real_escape_string($_POST['homeowner']);
$homeArchitecture = mysql_real_escape_string($_POST['homeArchitecture']);
$energySatistfaction = mysql_real_escape_string($_POST['energySatistfaction']);
$interest = mysql_real_escape_string($_POST['interest']);
$income = mysql_real_escape_string($_POST['income']);
$favoritePart = mysql_real_escape_string($_POST['favoritePart']);
$concernedPart = mysql_real_escape_string($_POST['concernedPart']);
$solarPanels = mysql_real_escape_string($_POST['solarPanels']);
$heard = mysql_real_escape_string($_POST['heard']);
$questions = mysql_real_escape_string($_POST['questions']);



$sql = "INSERT INTO SurveyResults (firstName, lastName, email, zipCode, homeowner, homeArchitecture, energySatistfaction, interest, income, favoritePart, concernedPart, solarPanels, heard, questions) VALUES ('$firstName', '$lastName', '$email', '$zipCode', '$homeowner', '$homeArchitecture', '$energySatistfaction', '$interest', '$income', '$favoritePart', '$concernedPart', '$solarPanels', '$heard', '$questions')";


if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
}

mysql_close($link);
?>
