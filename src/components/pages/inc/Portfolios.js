import React from 'react';
import Airport from '../../images/airport.jpeg';
import Ama from '../../images/ama.gif';
import Kma from '../../images/kma.jpeg';
import Skma from '../../images/skma.jpeg';
import Gpha from '../../images/gpha.jpeg';
import Lagos from '../../images/lagos.png';
import Dealer1 from '../../images/schwarze.jpg';
import Dealer2 from '../../images/bergman.jpeg';
import Waste1 from '../../images/waste.jpeg';
import Container from '../../images/container.jpeg';
import Compaction from '../../images/compaction.jpeg';
import Mini from '../../images/mini.jpeg';


function Portfolios() {
    return(

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div>
                        <div>
                        <h2 className="main-heading text-center">
                        SAB – SELECTED PROJECTS COMPLETED IN GHANA
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
            <hr></hr>
            
                <div className="card shadow bg-warning">
                    <div className="card-body p-2 m-2">
                    <div className="row justify-content-center mt-8">
                    <div>
                        <div>
                        <h2 className="main-heading text-center">
                    HOLDING FACILITIES & EQUIPMENTS
                    </h2>
                    <div className="underline mx-auto"></div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Waste1} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Stationary waste compactors (Roto - Compactors)</h5>
                                        <p>For compaction of solid waste</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Container} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Open containers - Hooklift trucks</h5>
                                        <p>For general waste</p>
                                        <p>For lifting and transport of stationary compactors and open containers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Compaction} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Compaction trucks</h5>
                                        <p>For collection of waste bins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Mini} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Mini transfer station at Mallam</h5>
                                        <p>To receive solid waste from tricycles etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
                    </div>
                </div>

                <hr></hr>
            
                <div className="card shadow">
                    <div className="card-body p-2 m-2">
                    <div className="row justify-content-center mt-8">
                    <div>
                        <div>
                        <h2 className="main-heading text-center">
                    DEALER & FUNCTION
                    </h2>
                    <div className="underline mx-auto"></div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Dealer2} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Heinz Bergman OHG (Germany)</h5>
                                        <p>Manufacturers of waste management machines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-body b-2 p-3">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                    <img src={Dealer1} className="w-100 p-2" alt="about"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Schwarze Industries (USA)</h5>
                                        <p>Manufacturers of street / road and runway sweepers.</p>
                                    
                                    </div>
                                </div>
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

export default Portfolios;