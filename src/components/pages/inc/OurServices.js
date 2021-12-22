import React from 'react';
import {Link} from 'react-router-dom';
import Service1 from '../../images/oil.jpeg';
import Service2 from '../../images/minning.png';
import Service3 from '../../images/rental.jpeg';
import Service4 from '../../images/constrution.jpeg';





function OurServices() {
    return(
        <section className="section border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-center">
                    <h3 className="main-heading">Our Services</h3> 
                    <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card shadow">
                                <img src={Service1} className="w-100 border-botton" alt="services"/>
                             <div className="card-body">
                                <h6 className="text-center">Oil & Gas Services</h6>
                                <div clssName="underline"></div>
                               
                                <Link to="/services" className="btn btn-warning shadow">read more</Link>
                            </div>
                        </div>

                        
                            
                    </div> 

                    <div className="col-md-3 text-center">
                        <div className="card shadow">
                                <img src={Service2} className="w-100 border-botton" alt="services"/>
                             <div className="card-body">
                                <h6 className="text-center">Minning Services</h6>
                                <div clssName="underline"></div>
                                
                                <Link to="/services" className="btn btn-warning shadow">read more</Link>
                            </div>
                        </div>

                        
                            
                    </div> 

                    <div className="col-md-3 text-center">
                        <div className="card shadow">
                                <img src={Service3} className="w-100 border-botton" alt="services"/>
                             <div className="card-body">
                                <h6 className="text-center">Equipment Rentals</h6>
                                <div clssName="underline"></div>
                                
                                <Link to="/services" className="btn btn-warning shadow">read more</Link>
                            </div>
                        </div>

                        
                            
                    </div> 

                    <div className="col-md-3 text-center">
                        <div className="card shadow">
                                <img src={Service4} className="w-100 border-botton" alt="services"/>
                             <div className="card-body">
                                <h6 className="text-center">Plants & Building</h6>
                                
                                <Link to="/services" className="btn btn-warning shadow">read more</Link>
                            </div>
                        </div>

                        
                            
                    </div> 
                        
                
            </div>
        </div>
    </section>

    );
}

export default OurServices;