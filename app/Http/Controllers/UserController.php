<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        if(User::where('email', $email)->first()){
            if($password == "123456"){
                return response()->json([
                    'err' => 1,
                ],200);
            }
        }
        return response()->json([
            'err' => 0,
        ],200);
            
    }

    public function register(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        if(!User::where('email', $email)->first()){
            $user = new User();
            $user->name = "hung";
            $user->email = $email;
            $user->password = $password;
            $user->type = 0;
            $user->save();
            return response()->json([
                'err' => 1,
            ],200);
            
        }
        return response()->json([
            'err' => $email,
        ],200);
            
    }
}
