<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function createOrder(OrderRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id(); // Get the authenticated user's ID

        $order = Order::create($data);

        return response()->json([
            'message' => 'Order created successfully',
            'order' => $order
        ], 201);
    }
}
