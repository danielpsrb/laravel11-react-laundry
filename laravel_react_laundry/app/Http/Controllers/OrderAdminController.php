<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderAdminController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::with('user')
            ->when($request->input('name'), function ($query, $name) {
                $query->whereHas('user', function ($query) use ($name) {
                    $query->where('name', 'like', '%' . $name . '%');
                });
            })->orderBy('id', 'desc')->paginate(10);
            return view('pages.orders.show', compact('orders'));
    }

    public function show($id)
    {
        $order = Order::with('user')->findOrFail($id);
        return view('pages.orders.detail', compact('order'));
    }

    //edit
    public function edit($id)
    {
        $order = Order::findOrFail($id);
        return view('pages.orders.edit', compact('order'));
    }

    //update status orders
    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->status = $request->status;
        $order->save();
        return redirect()->route('orders.data')->with('success', 'Order status updated successfully');
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return redirect()->route('orders.data')->with('success', 'Order deleted successfully');
    }
}
