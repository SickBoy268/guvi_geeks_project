<?php
session_start();

require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
  $stmt->execute([$email]);
  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password'])) {
    // Generate session ID
    $sessionId = uniqid();

    // Save session in Redis
    $redis->setex($sessionId, 3600, $user['id']);

    // Save session ID in browser localStorage
    echo "<script>window.localStorage.setItem('sessionId', '$sessionId');</script>";

    // Redirect to profile page
    header('Location: profile.php');
    exit();
  } else {
    $loginError = 'Invalid email or password';
  }
}

?>

// check if form is submitted
if(isset($_POST['submit'])){
    // retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // check if passwords match
    if($password != $confirm_password){
        $error = "Passwords do not match!";
    } else {
        // hash password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // insert user data into database
        $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $hashed_password);
        $stmt->execute();

        // redirect to profile page
        header("Location: profile.php");
        exit();
    }
}