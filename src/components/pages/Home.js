import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmv from './inc/Vmv';
import OurServices from './inc/OurServices';
import AboutSection from './inc/AboutSection';
import ContactForm from './inc/ContactForm';
import Partners from './inc/Partners';
import PortfolioSection from './inc/PortfolioSection';


function Home() {
    return (
      <div>
        <Slider />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading">Our Company</h3>
                <div className="underline mx-auto"></div>
                <p>
                  AFRIYIE WEALTH Company is a limited liability company
                  registered under the corporate laws of the republic of Ghana
                  with certificate of registration No. CS238002018 and was
                  incorporated on 5th September 2018.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision, Mission and Values */}
        <Vmv />

        {/* About us Section */}
        <AboutSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/*  Our Services */}
        <OurServices />

        {/* Get in Touch Section*/}
        <ContactForm />

        {/* Partners Section*/}
        <Partners />
      </div>
    );
}

export default Home;