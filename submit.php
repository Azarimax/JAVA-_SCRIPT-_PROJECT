<?php
// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Insert data into database
$sql = "INSERT INTO contacts (first_name, last_name, email, phone) VALUES ('$firstName', '$lastName', '$email', '$phone')";

if ($conn->query($sql) === TRUE) {
  // Redirect to thank-you page
  header("Location: thank-you.html");
  exit();
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>