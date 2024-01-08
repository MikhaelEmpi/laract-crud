<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\MahasiswaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('mahasiswas', [MahasiswaController::class, 'index']);
Route::get('mahasiswas/{id}', [MahasiswaController::class, 'show']);
Route::post('mahasiswas', [MahasiswaController::class, 'store']);
Route::put('mahasiswasupdate/{id}', [MahasiswaController::class, 'update']);
Route::delete('mahasiswadelete/{id}', [MahasiswaController::class, 'destroy']);