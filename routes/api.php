<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/index', 'App\Http\Controllers\StoryController@getIndex');
Route::get('/index/story', 'App\Http\Controllers\StoryController@getStory');
Route::get('/index/chap', 'App\Http\Controllers\StoryController@getChapter');
Route::get('/search', 'App\Http\Controllers\SearchController@search');

Route::get('/login/{email}', 'App\Http\Controllers\UserController@getUser');