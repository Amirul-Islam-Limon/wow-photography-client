import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.scss'

const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container container-fluid">
                    <Link class="navbar-brand" id="navbar__brand__name" href="#">Wow Photography</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto " id="navbar__nav">
                        <li class="nav-item">
                        <Link to="/home" class="nav-link" href="">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/ordered" class="nav-link" href="">Order</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/login" class="nav-link" href="">Login</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/admin" class="nav-link" href="#">Admin</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;