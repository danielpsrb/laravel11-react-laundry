// src/components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer className="bg-secondary text-white p-4">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 my-3 md-text-center">
                        <h3 className="oleo-font">All Fresh Laundry</h3>
                        <div className="row">
                            <div className="col-lg">
                                <span>
                                    Copyright &#169; {new Date().getFullYear()} | All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <h4>Kontak Kami</h4>
                        <div className="row text-left my-2">
                            <div className="col-lg-4"><i className="fa-brands fa-whatsapp"></i> Hub. WhatsApp</div>
                            <div className="col-lg-5"><a className="text-white" target="_blank" rel="noopener noreferrer" href="https://wa.me/628529901875">+62 852 9901 8765</a></div>
                        </div>
                        <div className="row text-left my-3">
                            <div className="col-lg-4"><i className="fa-solid fa-location-dot"></i> Alamat</div>
                            <div className="col-lg-8">Malalayang, Kota Manado, Sulawesi Utara</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31908.37035491883!2d124.79653078987171!3d1.4468403089098951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287747d10e6d61d%3A0x4030bfbcaf78a10!2sKec.%20Malalayang%2C%20Kota%20Manado%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1718014601759!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
