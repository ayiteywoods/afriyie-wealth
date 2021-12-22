import React from 'react';
import {Link} from 'react-router-dom';
import Brand from '../images/brand.png';



function Navbar() {
    return (
      <div className="navbar-light bg-white shadow p-1">
        <div className="container">
          <div classname="row">
            <div classname="col-md-12">
              <nav class="navbar navbar-expand-lg text-green">
                <div class="container-fluid">
                  <Link to="/" class="navbar-brand">
                    <img
                      src={Brand}
                      className="brand border-botton"
                      width="100%"
                      alt="services"
                    />
                  </Link>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    class="collapse  navbar-collapse  "
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link to="/" class="nav-link active">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/about" class="nav-link active">
                          About Us
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/service" class="nav-link active">
                          Services
                        </Link>
                      </li>

                      {/*  <li class="nav-item">
                                    <Link to='/portfolio' class="nav-link active" >Portfolio</Link>
                                </li>  */}

                      <li class="nav-item">
                        <Link to="/gallery" class="nav-link active">
                          Gallery
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="#" class="nav-link active">
                          News/Events
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/contact" class="nav-link active">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Navbar;