<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/oi', function () {
    return Inertia::render('Welcome');
});
