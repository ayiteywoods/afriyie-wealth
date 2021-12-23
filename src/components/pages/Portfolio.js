import React from "react";
import Portfolios from "./inc/Portfolios";
import Ts1 from "../images/comp.png";
import Ts2 from "../images/comp.png";
import Ts3 from "../images/comp.png";
import Ts4 from "../images/comp.png";
import CallToAction from "./inc/CallToAction";

function Portfolio() {
  return (
    <div>
      <div class="jumbotron portfolio-header text-center d-flex justify-content-center align-items-center">
        <div class="container">
          <h1 className="display-3 ">Our Portfolio</h1>
          <div className="underline mx-auto"></div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body b-2">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <h2 className="main-heading text-center">
                    Portfolio Experience
                  </h2>
                  <div className="underline mx-auto"></div>
                  <h5 className="text-center">
                    Sab Construction Engineering has over ten years experience
                    in the sanitation and waste management business and have
                    provided service for the following institutions;
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <Portfolios />

          {/* Transfer Stations*/}

          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Transfer Stations</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card shadow">
                <img src={Ts1} className="w-100 border-botton" alt="services" />
                <div className="card-body">
                  <h6>Mini Waste Transfer Station 1</h6>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card shadow">
                <img src={Ts2} className="w-100 border-botton" alt="services" />
                <div className="card-body">
                  <h6>Mini Waste Transfer Station 2</h6>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card shadow">
                <img src={Ts3} className="w-100 border-botton" alt="services" />
                <div className="card-body">
                  <h6>Mini Waste Transfer Station 3</h6>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card shadow">
                <img src={Ts4} className="w-100 border-botton" alt="services" />
                <div className="card-body">
                  <h6>Mini Waste Transfer Station 4</h6>
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

export default Portfolio;
