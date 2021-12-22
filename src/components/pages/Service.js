import React from 'react';
import MainServices from '../pages/inc/MainServices';
import Hooklift from '../images/hooklift_truck_2.jpeg';
import Compactor from '../images/compaction_truck.jpeg';
import CallToAction from '../pages/inc/CallToAction';



function Service() {
    return(
        <div>
            <div class="jumbotron services-header text-center d-flex justify-content-center align-items-center">
        <div class="container">
            
          <h1 className="display-3 ">Our Services</h1>
          <div className="underline mx-auto"></div>
          
        </div>
        </div>
        <section className="section pb-0">
            <div className="container">
                
            <MainServices />
           <hr className="m-5" />
            <div className="row">
                
                <div className="col-md-6 mt-4">
                    <div className="card shadow">
                    <div className="card-content p-4 m-4">
                    <h2 className="main-heading">
                    Sale of Waste Management Machines / Equipment
                    </h2>
                    <p>
                    Nothing is more expensive than storing and 
                    transporting air, needless hollow spaces are 
                    the result of compacted waste. Not only do the 
                    containers and storage spaces bulge, but their 
                    costs also quickly spills over!

                    </p>
                    <p>
                    BERGMANN has been setting standards in the waste 
                    disposal industry for over 40 years. BERGMANN products 
                    and system solutions stand for longevity, reliability 
                    and ease of maintenance.
                    </p>
                    <ul>
                        <li>Mobile-packs bins</li>
                        <li>Roto-compactors</li>
                        <li>Roll-packers</li>
                        <li>Street / Runway sweepers</li>

                    </ul>
                    </div>
                </div>
                 </div>
                <div className="col-md-6 ">
                <div className="card shadow">
                    <div className="card-content p-4">
                    <h2 className="main-heading">
                    Public Health / Hygiene Promotion Initiatives and Training
                    </h2>
                    
                    <ul>
                        <li>Organizations</li>
                        <li>Hotes</li>
                        <li>Social Groups</li>
                        <li>Schools</li>
                        <li>Etc.</li>
                    </ul>
                    </div>
                    <hr />

                    <div className="row p-2">
                        
                        <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-content m-2 text-center">
                            <img src={Hooklift} className="w-100 border-botton" alt="services"/>
                            <h5>Hooklift Truck</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 mb-2">
                        <div className="card shadow">
                            <div className="card-content m-2 text-center">
                            <img src={Compactor} className="w-100 border-botton" alt="services"/>
                                <h5>Compactor Truck</h5>
                            </div>
                        </div>

                        </div>

                    </div>

                </div>
                 
                </div>
            </div>
            </div>
        
            
        </section>
        <CallToAction />
        </div>
    );
}

export default Service;