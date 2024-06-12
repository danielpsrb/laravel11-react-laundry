<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserDataController extends Controller
{
    //get-data users
    public function index()
    {
        $users = User::all()->map(function ($user) {
            $user->images_profile_url = $user->images_profile_url;
            return $user;
        });

        return response()->json([
            'data' => $users
        ]);
    }

    //get data user by id
    public function show($id)
    {
        $user = User::find($id);
        $user->images_profile_url = $user->images_profile_url;

        return response()->json([
            'data' => $user
        ]);
    }

    public function getAuthenticatedUser()
    {
        $user = Auth::user();

        if ($user) {
            return response()->json([
                'data' => [
                    'name' => $user->name,
                    'email' => $user->email,
                    'images_profile_url' => $user->images_profile_url,
                ]
            ]);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
