import React from "react";

function HeroSection() {
  return (
    <section className='hero py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <img src='images/laundry.jpg' className='img-fluid rounded' alt='Hero' />
          </div>
          <div className='col-md-6'>
            <h1 className='display-4'>Welcome to Our Website</h1>
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sem eget nunc venenatis mattis.</p>
            <a href='#' className='btn btn-primary py-2 px-3'>
              Laundry Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
