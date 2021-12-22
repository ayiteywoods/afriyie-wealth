import React from 'react';
import Airport from '../../images/airport.jpeg';
import Ama from '../../images/ama.gif';
import Kma from '../../images/kma.jpeg';
import Skma from '../../images/skma.jpeg';
import Gpha from '../../images/gpha.jpeg';
import Lagos from '../../images/lagos.png';

function PortfolioSection() {
    return(
        <section className="section bg-c-yellow border-top">
            <div className="container">
            <div className="row justify-content-center">
                    <div>
                        <div>
                        <h2 className="main-heading text-center">
                    OUR PORTFOLIO
                    </h2>
                    <div className="underline mx-auto"></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Airport} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Ghana Airport Company Limited</h5>
                                        <p>Airside cleaning /maintenance and 
                                            servicing of Runway sweepers</p>
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
                                    <img src={Ama} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Accra Metropolitan Assembly</h5>
                                        <p>Mechanized street sweeping and Public 
                                            cleansing</p>
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
                                    <img src={Kma} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Kumasi Metropolitan Assembly</h5>
                                        <p>Mechanized street sweeping, drain and 
                                            walkway cleaning.</p>
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
                                    <img src={Skma} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Sekondi – Takoradi Metropolitan Assembly</h5>
                                        <p>Public Cleaning</p>
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
                                    <img src={Gpha} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Ghana Ports and Harbours Authority</h5>
                                        <p>Solid waste collection – Main harbour, Fishing 
                                            harbour,offices and residences.</p>
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
                                    <img src={Lagos} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Lagos Polo Club – Ikoyi, Nigeria</h5>
                                        <p>Supply and installation of 2 stationary waste 
                                            Compactors</p>
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

export default PortfolioSection;