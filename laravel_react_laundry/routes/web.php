<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.auth.login');
});

Route::middleware(['auth'])->get('/admin/dashboard', function () {
    return view('pages.dashboard', ['type_menu' => 'dashboard']);
})->name('dashboard');
