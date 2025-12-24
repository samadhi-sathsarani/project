<?php
include 'db.php';
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    // If you haven't set up hashing yet, use: if ($password == $user['password'])
    if (password_verify($password, $user['password'])) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}
?>