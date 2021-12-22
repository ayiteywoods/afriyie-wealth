import React from 'react';
import Partner3 from '../../images/bergmann.jpg';
import Partner4 from '../../images/schwarze.jpg';



function Partners() {
    return(
        <section className="section border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mb-4 mx-auto">
                    <h2 className="main-heading text-center" >OUR PARTNERS</h2>
                    <div className="underline mx-auto"></div>
                    <h6 className="text-center">Sab Construction Engineering has a wide
                     range and variety of Partners..</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 p-2 b-1 shadow">
                    <p>Partner 1 Image</p>
                </div>
                <div className="col-md-2 p-2 p-2 b-1 shadow">
                    <p>Partner 2 Image</p>
                </div>
                <div className="col-md-2 p-2 p-2 b-1 shadow">
                <img src={Partner3} className="w-100 border-botton" alt="partner"/>
                </div>
                <div className="col-md-2 p-2 p-2 b-1 shadow">
                <img src={Partner4} className="w-100 border-botton" alt="partner"/>
                </div>
                <div className="col-md-2 p-2 p-2 b-1 shadow">
                    <p>Partner 5 Image</p>
                </div>
                <div className="col-md-2 p-2 p-2 b-1 shadow">
                    <p>Partner 6 Image</p>
                </div>
            </div>

        </div>
    </section>

    );

}

export default Partners;