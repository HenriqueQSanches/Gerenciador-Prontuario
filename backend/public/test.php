<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'message' => 'Teste básico funcionando!',
    'time' => date('Y-m-d H:i:s')
]);
