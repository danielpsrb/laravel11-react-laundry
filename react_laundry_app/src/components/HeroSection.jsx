import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/orders/new'); // Navigasi ke halaman /orders/new
  };

  return (
    <section className='hero py-3'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <img src='images/laundry.jpg' className='img-fluid rounded' alt='Hero' />
          </div>
          <div className='col-md-6'>
            <h2 className='display-6'>Welcome to Our Website</h2>
            <p className='lead'>
              All Fresh Laundry menyediakan layanan laundry berkualitas tinggi dengan harga terjangkau. Percayakan pakaian Anda kepada kami dan nikmati layanan terbaik.
            </p>
            <button onClick={handleButtonClick} className='btn btn-primary py-2 px-3'>
              Laundry Sekarang!
            </button>
          </div>
        </div>

        <div className='row mt-5'>
          <div className="col-12 text-center">
            <h2 className="my-2">Why Choose Us?</h2>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <div className="card h-100">
              <div className="card-body text-center">
                <img src="images/bersih.png" alt="Bersih" className="img-fluid" />
                <h3>Bersih</h3>
                <p className="card-text">
                  Pakaian Anda akan dicuci dan disetrika dengan bersih dan rapi.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <div className='card h-100'>
              <div className='card-body text-center'>
                <img src="images/quality.png" alt="berkualitas" className="img-fluid" />
                <h3>Berkuliatas</h3>
                <p className='card-text'>
                  Kami menggunakan deterjen dan pelembut pakaian yang berkualitas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <div className='card h-100'>
              <div className='card-body text-center'>
                <img src="images/quickly.png" alt="cepat" className="img-fluid" />
                <h3>Cepat</h3>
                <p className='card-text'>
                  Pakaian Anda akan dicuci dan disetrika dengan cepat dan tepat waktu.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <div className='card h-100'>
              <div className='card-body text-center'>
                <img src="images/terpercaya.png" alt="terpercaya" className="img-fluid" />
                <h3>Terpercaya</h3>
                <p className='card-text'>
                  Melayani pelanggan dengan layanan terbaik selama bertahun-tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;