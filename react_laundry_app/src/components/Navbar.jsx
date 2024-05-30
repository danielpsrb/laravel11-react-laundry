import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div className='container-fluid'>
          <div className='navb-logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div className='navb-item d-none d-lg-flex'>
            <div className='item'>
              <a href='beranda.html'>Home</a>
            </div>
            <div className='item'>
              <a href='newOrder.html'>New Orders</a>
            </div>
            <div className='item'>
              <a href='orderInfo.html'>Order Info</a>
            </div>
            <div className='item'>
              <a href='profil.html'>Profile</a>
            </div>

            <div className=' dropdown item-button'>
              <a href='#' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'>
                <img src='/images/users.png' width='40' height='40' alt='User' />
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='login.html'>
                    Login
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Button trigger modal */}
          <div className='mobile-toggler d-lg-none'>
            <a href='#' data-bs-toggle='modal' data-bs-target='#navbModal'>
              <i className='fa-solid fa-bars'></i>
            </a>
          </div>

          {/* Modal */}
          <div className='modal fade' id='navbModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='false'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <img src='/images/logo.png' width='70' height='70' alt='Logo' />
                  <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
                    <i className='fa-solid fa-x'></i>
                  </button>
                </div>
                <div className='modal-body'>
                  <div className='modal-line'>
                    <i className='fa-solid fa-house'></i>
                    <a href='#'>Home</a>
                  </div>
                  <div className='modal-line'>
                    <i className='fa-solid fa-plus'></i>
                    <a href='#'>New Orders</a>
                  </div>
                  <div className='modal-line'>
                    <i className='fa-solid fa-circle-info'></i>
                    <a href='#'>Order Info</a>
                  </div>
                  <div className='modal-line'>
                    <i className='fa-solid fa-address-book'></i>
                    <a href='#'>Profile</a>
                  </div>
                  <a href='#' className='navb-button' type='button'>
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
