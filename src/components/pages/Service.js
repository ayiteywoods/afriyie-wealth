import React from 'react';
import MainServices from '../pages/inc/MainServices';
import CallToAction from '../pages/inc/CallToAction';
import Header from "../images/services.jpeg";


function Service() {
    return (
      <div>
        <div
          className="jumbotron services-header text-center d-flex justify-content-center align-items-center"
          style={{ backgroundImage: `url(${Header})` }}
        >
          <div className="container">
            <h1 className="display-3 ">Our Services</h1>
            <div className="underline mx-auto"></div>
          </div>
        </div>
        <section className="section pb-0">
          <div className="container">
            <MainServices />
          </div>
        </section>
        <CallToAction />
      </div>
    );
}

export default Service;