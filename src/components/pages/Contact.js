import React from 'react';
import {FaRegAddressCard} from 'react-icons/fa';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import ContactForm from './inc/ContactForm';
import Map from './inc/Map';



function Contactus() {
    return (
      <div>
        <div class="jumbotron contact-header text-center d-flex justify-content-center align-items-center">
          <div class="container">
            <h1 className="display-3 ">Contact Us</h1>
            <div className="underline mx-auto"></div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="card shadow">
              <div className="card-body m-2">
                <div className="row justify-content-center">
                  <div className="col-md-5 mb-4 p-3">
                    <h3 className="main-heading">Contact Us!</h3>
                    <p>
                      Our staff available to attend to all your inquiries,
                      request and interest about our works.{" "}
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-md-2 text-center">
                        <FaRegAddressCard size="50" color="red" />
                      </div>
                      <div className="col-md-9">
                        <p>
                          Box 52, Dormaa Ahenkro,Brekum Road TDC Towers Room A9,
                          Comm 2 Tema - Ghana
                        </p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-2 text-center">
                        <FaPhoneSquareAlt size="50" color="green" />
                      </div>
                      <div className="col-md-9">
                        <p>
                          +233 (0)555 675 083
                          <br /> +233 (0)273 767 705
                        </p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-2 text-center">
                        <FaMailBulk size="50" color="blue" />
                      </div>
                      <div className="col-md-9">
                        <p>
                          Email: info@afriyiewealth.com
                          <br></br>
                          Web: www.afriyiewealth.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 p-3">
                    <h3 className="main-heading">Send Us a Message!</h3>
                    <p>
                      Our staff available to attend to all your email inquiries,
                      request and interest about doing business with us.{" "}
                    </p>
                    <hr />
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section*/}
        <Map />
      </div>
    );
}

export default Contactus;