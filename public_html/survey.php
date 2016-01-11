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
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$zipCode = $_POST['zipCode'];
$homeowner = $_POST['homeowner'];
$homeArchitecture = $_POST['homeArchitecture'];
$energySatistfaction = $_POST['energySatistfaction'];
$interest = $_POST['interest'];
$income = $_POST['income'];
$favoritePart = $_POST['favoritePart'];
$concernedPart = $_POST['concernedPart'];
$solarPanels = $_POST['solarPanels'];
$heard = $_POST['heard'];
$questions = $_POST['questions'];

$sql = "INSERT INTO Survey Results (firstName, lastName, email, zipCode, homeowner, homeArchitecture, energySatistfaction, interest, income, favoritePart, concernedPart, solarPanels, heard, questions) VALUES ('$firstName', '$lastName', '$email', '$zipCode', '$homeowner', '$homeArchitecture', '$energySatistfaction', '$interest', '$income', '$favoritePart', '$concernedPart', '$solarPanels', '$heard', '$questions')";



if (!mysql_query($sqltest)) {
	die('Error: ' . mysql_error());
}

mysql_close($link);
echo "<script>
             window.history.go(-1);
     </script>";
?>
