<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('name', 'like', "%".request('name')."%")
            ->orderBy('id', 'desc')
            ->paginate(10);
        return view('pages.users.index', compact('users'));
    }

    //edit users
    public function edit(User $user)
    {
        return view('pages.users.edit', compact('user'));
    }

    //update data users
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
        ]);

        if ($request->password) {
            $user->update([
                'password' => Hash::make($request->password),
            ]);
        }

        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $imageName = $image->hashName();
            $image->storeAs('public/profiles', $imageName);
            $user->images_profile = $imageName;
        }
        $user->save();

        return redirect()->route('users.data')->with('success', 'Data user berhasil diupdate');
    }

    //delete data users
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('users.data')->with('success', 'Data user berhasil dihapus');
    }
}
