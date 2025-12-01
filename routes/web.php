<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('about');

Route::get('/job-portal', function () {
    return Inertia::render('jobportal', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('jobportal');

Route::get('/jepang', function () {
    return Inertia::render('jepang', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('jepang');

Route::get('/korea', function () {
    return Inertia::render('korea', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('korea');

Route::get('/eropa', function () {
    return Inertia::render('eropa', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('eropa');

Route::get('/indonesia', function () {
    return Inertia::render('indonesia', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('indonesia');

Route::get('/all-class', function () {
    return Inertia::render('allclass', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('allclass');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
