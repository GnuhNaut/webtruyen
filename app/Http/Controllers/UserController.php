<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser(Request $request){
        $email = $request->email;
        // return $request->email;
        return response()->json([
            'err' => false,
            'email' => $email,
        ],200);
            
    }
}
