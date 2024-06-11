<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    // membuat pesanan
    public function createOrder(OrderRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id(); // Get the authenticated user's ID

        $order = Order::create($data);

        // Perbarui data alamat dan nomor telepon di tabel users
        $user = Auth::user();
        $user->address = $data['alamat'];
        $user->phone_number = $data['nomor_telepon'];
        $user->save();

        return response()->json([
            'message' => 'Order created successfully',
            'order' => $order
        ], 201);
    }

    // mendapatkan pesanan
    public function getOrders(Request $request)
    {
        $orders = Order::where('user_id', $request->user()->id)->get();
        return response()->json($orders);
    }
}
