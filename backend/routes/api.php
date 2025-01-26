<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'API está funcionando!']);
});

Route::get('/test-connection', function () {
    return response()->json([
        'message' => 'Conexão estabelecida com sucesso!',
        'status' => 200
    ]);
});