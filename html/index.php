<html>
<head></head>
<body>
  <h1>Index |_|</h1>
<?php

$servername = "mysql:3306";
$username = getenv('MYSQL_USER');
$password = getenv('MYSQL_PASSWORD');

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

?>  
  <?php //echo phpinfo();?>
</body>
</html>