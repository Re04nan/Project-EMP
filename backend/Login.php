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

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["nomeLog"]) && !empty($data["nomeLog"]) && isset($data["senhaLog"]) && !empty($data["senhaLog"])) {
    require "Connection.php";
    $nome = $data["nomeLog"];
    $senha = $data["senhaLog"];
    $sql = $conn->query("SELECT * FROM cadastro WHERE nome = '$nome' AND senha = '$senha'");
    if ($sql->rowCount() > 0) {
        $getUser = $sql->fetchAll(PDO::FETCH_ASSOC)[0];
        $id = $getUser["id_user"];
        $result = true;
    }
    else {
        $result = false;
    }
} 
else {
    $result = false;
}
echo json_encode(["sucess"=>$result, "id"=>$id]);
