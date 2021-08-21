import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div>
            <div className="footer_content">
                <div className="container">
                    <div className="footer_content row">
                        <div className="col-md-4">
                            <p>Our Company</p>
                            <h6></h6>
                        </div>
                        <div className="col-md-4">
                            <p>About Us</p>
                            <h6></h6>
                        </div>
                        <div className="col-md-4">
                            <p>Address</p>
                            <h6>130/10/Kha, Baganbari, Mathertek,Dhaka-1214</h6>
                        </div>
                    </div>
                </div>
                    <div className="footer_owner_info">
                        <p><small>Amirul Islam Limon © {(new Date()).getFullYear()}</small></p>
                    </div>
            </div>
        </div>
    );
};

export default Footer;