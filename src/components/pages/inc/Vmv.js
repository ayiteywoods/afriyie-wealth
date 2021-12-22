import React from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";
import {BsFillLayersFill } from "react-icons/bs";
import { BsFillShiftFill } from "react-icons/bs";


function Vmv(){
    return(
        <section className="section bg-c-light border-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 mx-auto text-center">
                    <h3 className="main-heading-white">Our Vision, Mission and Values</h3> 
                    <div className="underline mx-auto"></div>
                    </div>
                        <div className="col-md-3 border border-white rounded-3 text-center p-3 m-2 text-white">
                            <BsFillBriefcaseFill size="100" color="white"/>
                            <h6 className="sub-heading-white">Our Vision</h6>
                            <p>To be a diverse family owned construction and asset management business that will 
                                grow to be the most respected in the industry.</p>
                        </div> 
                        <div className="col-md-3 border border-white  rounded-3 text-center p-3 m-2 text-white">
                            <BsFillLayersFill size="100" color="white"/>
                            <h6 className="sub-heading-white">Our Mision</h6>
                            <p>To provide construction and asset management solutions in an environment where 
                                people feel safe, secure and valued.</p>
                        </div> 
                        <div className="col-md-3 border border-white rounded-3 text-center p-3 m-2 text-white">
                            <BsFillShiftFill size="100" color="white"/>
                            <h6 className="sub-heading-white">Our Values</h6>
                            <p>We are committed to conducting business in a manner 
                                that provides, Trust, Care, Respect, Fun, Honesty and Safety.</p>
                        </div> 
                
            </div>
        </div>
    </section>

    );
}
export default Vmv;