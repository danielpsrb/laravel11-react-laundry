@extends('layouts.app')

@section('title', 'Edit Order')

@push('style')
    <!-- CSS Libraries -->
    <link rel="stylesheet" href="{{ asset('library/summernote/dist/summernote-bs4.css') }}">
    <link rel="stylesheet" href="{{ asset('library/bootstrap-social/assets/css/bootstrap.css') }}">
@endpush

@section('main')
    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Edit Order</h1>
                <div class="section-header-breadcrumb">
                    <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div class="breadcrumb-item">Edit Order</div>
                </div>
            </div>
            <div class="section-body">
                <h2 class="section-title">Edit Order</h2>
                <p class="section-lead">
                    Perbarui informasi tentang Order Laundry.
                </p>

                <div class="row mt-sm-4">
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="card">
                            <form method="POST" action="{{ route('orders.update', $order->id )}}">
                                @csrf
                                @method('PATCH')
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group col-md-6 col-12">
                                            <label>Nama</label>
                                            <p>{{ $order->name }}</p>
                                        </div>
                                        <div class="form-group col-md-6 col-12">
                                            <label>Alamat</label>
                                            <p>{{ $order->user->address }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6 col-12">
                                            <label>Nomor Telepon</label>
                                            <p>{{ $order->nomor_telepon }}</p>
                                        </div>
                                        <div class="form-group col-md-6 col-12">
                                            <label>Estimasi Hari</label>
                                            <p>{{ $order->estimasi_hari }} Hari</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6 col-12">
                                            <label>Jenis Laundry</label>
                                            <p>{{ $order->jenis_laundry }}</p>
                                        </div>
                                        <div class="form-group col-md-6 col-12">
                                            <label>Status</label>
                                            <select name="status" class="form-control" style="height: 40px;">
                                                <option value="completed" {{ $order->status === 'completed' ? 'selected' : '' }}>
                                                    Pesanan Selesai
                                                </option>
                                                <option value="in_progess" {{ $order->status === 'in_progress' ? 'selected' : '' }}>
                                                    Dalam Progress
                                                </option>
                                                <option value="pending" {{ $order->status === 'pending' ? 'selected' : '' }}>
                                                    Pending
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                <div class="card-footer text-right">
                                    <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection

@push('scripts')
    <!-- JS Libraries -->
    <script src="{{ asset('library/summernote/dist/summernote-bs4.js') }}"></script>

    <!-- Page Specific JS File -->
@endpush
