import React from 'react';
import Team1 from '../images/about1.jpeg';
import Vmv from './inc/Vmv';
import Team from './inc/Team';

function Aboutus() {
    return (
      <div>
        <div class="jumbotron about-header text-center d-flex justify-content-center align-items-center">
          <div class="container">
            <h1 className="display-3 ">About Us</h1>
            <div className="underline mx-auto"></div>
          </div>
        </div>
        <section className="section bt-4">
          <div className="container">
            <div className="card shadow bt-4">
              <div className="card-body p-2">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="main-heading">Our Story</h3>
                    <hr />
                    <div>
                      <p>
                        AFRIYIE WEALTH Company is a limited liability company
                        registered under the corporate laws of the republic of
                        Ghana with certificate of registration No. CS238002018
                        and was incorporated on 5th September 2018.{" "}
                      </p>

                      <p>
                        The company is in Dormaa Berekum road. Close to
                        university of Energy hostel, Dormaa Ahenkro & in Tema,
                        inside TDC towers room A9, Comm 2, Tema. The company
                        specialized in Food and Beverages, Paper Products, Chip
                        Boards Freight forwarding/ Customs Clearance, Transport
                        and Housing.
                      </p>
                    </div>

                    <h3 className="main-heading">
                      About The Managing Director - Mr. Asante Afriyie
                    </h3>
                    <hr />
                    <div>
                      <p>
                        Mr. Asante Afriyie is the Managing Director of the
                        company. He holds MBA-Project Management from Kings
                        College – London-United Kingdom and post graduate degree
                        in procurement and supply UK. He is a trained Health,
                        Safety and Environmental Protection officer from Ocean
                        Rig Olympia (Drilling Ship) -Norway. He has first
                        Degree, in Publishing Administration from Kwame Nkrumah
                        University of Science & Technology – Kumasi, Ghana. A
                        trained Custom House Agent with Proficiency Certificate
                        from Ghana Customs Exercise and Preventive Service
                        (GRA). Currently the chairman of Ghana Freight
                        Forwarders Association chairman for Bono, Bono East and
                        Ahafo. He is also counsel/office hold of the Association
                        at the National Level. Government appointee at the
                        Dormaa Central Municipal Assembly. And former marketing
                        manager of Apex shipping and commercial company (ASCO).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div claasName="card-body shadow border">
                        <img src={Team1} className="w-100 p-2" alt="about" />
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* Values Mission and Vision Section*/}
          <Vmv />

          {/* Team Section */}
          <Team />
        </section>
      </div>
    );
}

export default Aboutus;