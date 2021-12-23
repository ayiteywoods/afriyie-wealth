import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/brandblack.png';

function Footer() {
    return (
      <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6>Company Infomation</h6>
              <hr />
              <p>
                AFRIYIE WEALTH Company is a limited liability company registered
                under the corporate laws of the republic of Ghana with
                certificate of registration No. CS238002018 and was incorporated
                on 5th September 2018.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Quick Links </h6>
              <hr />
              <div>
                <Link to="/">Our Home</Link>
              </div>
              <div>
                <Link to="/about">About Us</Link>
              </div>
              <div>
                <Link to="/service">Our Service</Link>
              </div>
              <div>
                <Link to="#">Events & News</Link>
              </div>
              <div>
                <Link to="/contact">Contact Us</Link>
              </div>
              <div>
                <Link to="/blog">Our Gallery</Link>
              </div>
            </div>

            <div className="col-md-3">
              <h6>Contact Information</h6>
              <hr />
              <div>
                <p className="text-white mb-1">
                  Box 52, Dormaa Ahenkro,Brekum Road TDC Towers Room A9, Comm 2
                  Tema - Ghana
                </p>
              </div>
              <div>
                <p className="text-white mb-1">info@afriyiewealth.com </p>
              </div>
              <div>
                <p className="text-white mb-1">+233 (0)555 675 083 </p>
              </div>
              <div>
                <p className="text-white mb-1">+233 (0)273 767 705 </p>
              </div>
            </div>

            <div className="col-md-3">
              <h6>Afriyie Wealth Company Ltd</h6>

              <hr />
              <div>
                <br></br>
              </div>
              <img src={Logo} className="w-100 border-botton" alt="about" />
            </div>
          </div>
          <div>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-md-6 text-center font-white">
              <p>Copyright © 2021 Afriyie Wealth . All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-center font-white">
              <p>Powered by: Eden Consult</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Footer;