<?php

use App\Http\Controllers\OrderAdminController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.auth.login');
});

Route::middleware(['auth'])->group(function () {
    Route::get('home', function () {
        return view('pages.dashboard', ['type_menu' => 'dashboard']);
    })->name('home');

    Route::get('/users', [UserController::class, 'index'])->name('users.data');

    //route orders
    Route::get('/orders', [OrderAdminController::class, 'index'])->name('orders.data');

    //route order-detail
    Route::get('/orders/{id}', [OrderAdminController::class, 'show'])->name('orders.detail');

    //route edit orders
    Route::get('/orders/{id}/edit', [OrderAdminController::class, 'edit'])->name('orders.edit');

    //route update orders
    Route::patch('/orders/{id}', [OrderAdminController::class, 'update'])->name('orders.update');

    //route delete orders
    Route::delete('/orders/{id}', [OrderAdminController::class, 'destroy'])->name('orders.delete');

});
