<!-- myibn-signup.php -->

<?php

define('DB_NAME', 'myibn');
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
$streetAddress = mysql_real_escape_string($_POST['streetAddress']);
$city = mysql_real_escape_string($_POST['city']);
$state = mysql_real_escape_string($_POST['state']);
$zipCode = mysql_real_escape_string($_POST['zipCode']);
$phoneNumber = mysql_real_escape_string($_POST['phoneNumber']);


$sql = "INSERT INTO users (firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumber) VALUES ('$firstName', '$lastName', '$email', '$streetAddress', '$city', '$state', '$zipCode', '$phoneNumber')";


if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
}

mysql_close($link);
?>
