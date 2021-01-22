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

if (isset($data["email"]) && !empty($data["email"]) && isset($data["senha"]) && !empty($data["senha"])) {
    $email = $data["email"];
    $senha = $data["senha"];
    $sqlUser = $conn->query("SELECT * FROM cadastro WHERE email = '$email'");
    if ($sqlUser->rowCount() > 0) {
        $getUser = $sqlUser->fetchAll(PDO::FETCH_ASSOC)[0];
        $id = $getUser["id_user"];
        $sqlUpdate = $conn->query("UPDATE cadastro SET senha = '$senha' WHERE id_user = '$id'");
        if ($sqlUpdate) {
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


