<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'API está funcionando!'])
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET');
});

// Grupo de rotas da API
Route::prefix('api')->group(function () {
    Route::get('/', function () {
        return response()->json(['message' => 'API está funcionando!']);
    });
    
    require base_path('routes/api.php');
});
