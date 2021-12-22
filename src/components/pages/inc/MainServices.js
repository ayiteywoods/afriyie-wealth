import React from 'react';
import Service1 from '../../images/oil.jpeg';
import Service2 from '../../images/minning.png';
import Service3 from '../../images/rental.jpeg';
import Service4 from '../../images/constrution.jpeg';





function MainServices() {
    return (
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">
                    Manufactures of Paper Products
                  </h6>
                  <div clssName="underline"></div>
                  <p>
                    <ul>
                      <li>Egg Crate </li>
                      <li>Boxes</li>
                      <li>Tissue papers</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service2}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">Food and Beverages</h6>
                  <div clssName="underline"></div>
                  <p>
                    <ul>
                      <li>Sachet & Bottle Water</li>
                      <li>Fruit Drinks</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service3}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">Freight Forwarding</h6>
                  <div clssName="underline"></div>
                  <p>
                    <ul>
                      <li>
                        Import
                      </li>
                      <li>Export</li>
                      <li>Transit</li>
                      <li>Warehousing</li>
                      <li>Transshipment</li>
                      
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service4}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">Chip Boards</h6>
                  <div clssName="underline"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service3}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">Haulage/Transport</h6>
                  <div clssName="underline"></div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service4}
                  className="w-100 border-botton"
                  alt="services"
                />
                <div className="card-body">
                  <h6 className="text-center">Real Estate Development</h6>
                  <div clssName="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default MainServices;