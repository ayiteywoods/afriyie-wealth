import React from 'react';
import { Link } from "react-router-dom";
import Service1 from "../../images/manufacturing.jpeg";
import Service2 from "../../images/beverage.png";
import Service3 from "../../images/freight.jpeg";
import Service4 from "../../images/clipboad.jpg";
import Service5 from "../../images/haulage.jpeg";
import Service6 from "../../images/realestate.jpeg";



function OurServices2() {
    return (
      <section className="section bg-c-yellow border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <div>
                <h2 className="main-heading text-center">OUR SERVICES</h2>
                <div className="underline mx-auto"></div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service1} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Manufactures of Paper Products</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service2} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Food and Beverages</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service3} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Freight Forwarding</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service4} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Chip Boards</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service5} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Haulage/Transport</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body b-2 p-3">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Service6} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="col-md-8">
                      <h5>Real Estate Development</h5>
                      <p>
                        <Link to="/services" className="btn btn-warning shadow">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurServices2
