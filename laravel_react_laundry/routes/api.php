<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController; // Ensure this line is included
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);

    Route::post('/orders', [OrderController::class, 'createOrder']);
    Route::get('/orders', [OrderController::class, 'getOrders']);
});

Route::post('/login', [AuthController::class, 'loginAction']);
Route::post('/register', [AuthController::class, 'registerAction']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');