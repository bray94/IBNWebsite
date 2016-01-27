
<?php

define('DB_NAME', 'FAQ_question');
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


$email = mysql_real_escape_string($_POST['email']);
$question = mysql_real_escape_string($_POST['question']);


$sql = "INSERT INTO question (email, question) VALUES ('$email', '$question')";


if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
}

mysql_close($link);
echo "<script>
             window.history.go(-1);
     </script>";
?>
