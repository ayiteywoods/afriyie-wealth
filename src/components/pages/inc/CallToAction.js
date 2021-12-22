import React from 'react';
import {Link} from 'react-router-dom';


function CallToAction() {
    return(
        <section className="section p-1">
            <div className="card shadow">
                <div className="card-content">
                <div className="row call-to-action justify-content-center shadow">
                    <div className="col-md-4 ">
                    <h2 className="text-center ">Interested in our services?</h2>
                    </div>
                    <div className="col-md-2">
                    </div>

                    <div className="col-md-3">
                    </div>
                    <div className="col-md-2 text-center mx-auto">
                    <Link to='/contact' type='button' className="text-end  btn btn-lg btn-outline-light border border-white ">Get in Touch</Link>
                    </div>

                </div>

                </div>
            </div>
               
            
        </section>
    );
}

export default CallToAction;