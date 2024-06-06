<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // membuat pesanan
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

      // mengambil daftar pesanan
      public function getOrders(Request $request)
      {
          $orders = Order::where('user_id', $request->user()->id)->get();
          return response()->json($orders);
      }
}
