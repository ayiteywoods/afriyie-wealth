import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/brandblack.png';

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6>Company Infomation</h6>
                        <hr />
                        <p>
                        SAB is Ghanaian registered construction engineering, 
                        sand blasting & coating, equipment rentals and concrete 
                        structural waterproofing company dedicated to serving 
                        material resourced industries by designing and providing 
                        quality engineering services.

                        </p>
                    </div>

                    <div className="col-md-3">
                        <h6>Quick Links </h6>
                        <hr />
                        <div><Link to="/">Our Home</Link></div>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/service">Our Service</Link></div>
                        <div><Link to="/portfolio">Our Portfolio</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                        <div><Link to="/blog">Our Gallery</Link></div>
                        
                    </div>

                    <div className="col-md-3">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">P 78 Addogonno Railway Crossing 
                        Baatsonaa, Spintex Road</p></div>
                        <div><p className="text-white mb-1">info@sabconstructionengineering.com  </p></div>
                        <div><p className="text-white mb-1">+233 (0)545 379 992  </p></div>
                        <div><p className="text-white mb-1">+233 (0)243 266 669  </p></div>
      
                    </div>

                    <div className="col-md-3">
                    <h6>Sab Construction Engineering</h6>

                        <hr/>
                        <div><br></br></div>
                    <img src={Logo} className="w-100 border-botton" alt="about"/>
                    </div>

                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center font-white">
                        <p>Copyright © 2021 Sab Construction Engineering. All Rights Reserved</p>
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