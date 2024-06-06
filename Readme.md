# Dokumentasi API

## Endpoint

### Register

**Endpoint:** `http://127.0.0.1:8000/api/register`

**Metode:** `POST`

**Deskripsi:** Mendaftarkan pengguna baru.

**Contoh Body Request:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "passwordAnda",
  "confirm_password": "passwordAnda"
}
```

**Respon:**

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  "token": "YOUR_API_TOKEN_HERE"
}
```

**Aturan Validasi:**
- `name`: wajib, string, maksimal 255 karakter
- `email`: wajib, email yang valid, unik (tidak boleh sudah terdaftar)
- `password`: wajib, minimal 8 karakter, harus mengandung huruf dan angka
- `confirm_password`: wajib, harus sama dengan `password`

### Login

**Endpoint:** `http://127.0.0.1:8000/api/login`

**Metode:** `POST`

**Deskripsi:** Mengotentikasi pengguna dan mengembalikan token API.

**Contoh Body Request:**

```json
{
  "email": "johndoe@example.com",
  "password": "passwordAnda"
}
```

**Respon:**

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  "token": "YOUR_API_TOKEN_HERE"
}
```

**Aturan Validasi:**
- `email`: wajib, email yang valid
- `password`: wajib, string

### Buat Order

**Endpoint:** `http://127.0.0.1:8000/api/orders`

**Metode:** `POST`

**Deskripsi:** Membuat order baru. Memerlukan autentikasi token di masukan di header Authorization.

**Contoh Body Request:**

```json
{
  "name": "Jane Doe",
  "alamat": "123 Main St",
  "jenis_laundry": "Dry Cleaning",
  "estimasi_hari": 3,
  "status": "pending"
}
```

**Respon:**

```json
{
  "message": "Order created successfully",
  "order": {
    "id": 1,
    "name": "Jane Doe",
    "alamat": "123 Main St",
    "jenis_laundry": "Dry Cleaning",
    "estimasi_hari": 3,
    "status": "pending",
    "user_id": 1,
    "created_at": "2024-06-05T10:00:00.000000Z",
    "updated_at": "2024-06-05T10:00:00.000000Z"
  }
}
```

**Aturan Validasi:**
- `name`: wajib, string
- `alamat`: wajib, string
- `jenis_laundry`: wajib, string
- `estimasi_hari`: wajib, integer
- `status`: opsional, string, default `pending`

**Catatan:**
Ganti `YOUR_API_TOKEN_HERE` dengan token yang diterima saat login.

