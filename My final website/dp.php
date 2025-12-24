<?php
$conn = new mysqli("localhost", "root", "", "my final website");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }
?>