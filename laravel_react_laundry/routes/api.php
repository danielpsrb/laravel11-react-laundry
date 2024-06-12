<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\UserDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/users/profile', [UserDataController::class, 'getAuthenticatedUser']);
    Route::apiResource('/users', UserDataController::class);

    Route::post('/orders', [OrderController::class, 'createOrder']);
    Route::get('/orders', [OrderController::class, 'getOrders']);
});

Route::post('/login', [AuthController::class, 'loginAction']);
Route::post('/register', [AuthController::class, 'registerAction']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
