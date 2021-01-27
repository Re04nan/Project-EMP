<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

require "Connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["nome"]) && !empty($data["nome"]) && isset($data["email"]) && !empty($data["email"]) && isset($data["senha"]) && !empty($data["senha"])) {
    $nome = $data["nome"];
    $email = $data["email"];
    $senha = $data["senha"];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sql = $conn->query("INSERT INTO cadastro (nome, email, senha) values ('$nome','$email', '$senha')");
        if ($sql) {
            $result = true;
        }
        else {
            $result = false;
        }
    } 
    else {
        $result = false;
    }
} 
else {
    $result = false;
}

echo json_encode(["sucess"=>$result]);


