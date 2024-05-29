<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users',UserController::class);
});

Route::post('/login', [AuthController::class, 'loginAction']);
Route::post('/register', [AuthController::class, 'registerAction']);
Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
