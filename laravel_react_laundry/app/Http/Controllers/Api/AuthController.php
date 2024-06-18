<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //login
    public function loginAction(LoginRequest $request)
    {
        $data = $request->validated();

        if(!Auth::attempt($data)){
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'data' => $user,
            'token' => $token
        ]);
    }

    //register
    public function registerAction(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    //logout
    public function logout(Request $request)
    {
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out'
        ], 204);
    }
}
