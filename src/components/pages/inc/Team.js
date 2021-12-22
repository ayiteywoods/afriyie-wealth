import React from 'react';
import Image from '../../images/image.jpg';


function Team() {
    return (
      <section className="section mt-4">
        <div className="container">
          <div className="card">
            <div className="card-content shadow">
              <div className="row justify-content-center mb-4">
                <div className="col-md-12 text-center mt-4">
                  <h2 className="main-heading">
                    SALES & ENGINEERING EXPERTS
                  </h2>
                  <p>
                    Afriyie Wealth has brought together a leadership team with diverse
                    background and relevant expertise to provide a complete
                    picture to our partners and clients. The background and
                    areas of expertise include Legal, chemical, civil, and
                    mechanical engineering in Ghana and Europe. Management team
                    of Afriyie Wealth consists of:
                  </p>
                  <div className="underline mx-auto"></div>
                  <h5 className="sub-heading">OUR TEAM</h5>
                </div>

                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-content">
                      <img src={Image} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="sub-heading">Mr. Michael Opoku Afriyie</div>
                    <p>Director</p>
                  </div>
                </div>

                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-content">
                      <img src={Image} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="sub-heading">Ms. Erica Asante</div>
                    <p>Sales Manager</p>
                  </div>
                </div>

                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-content">
                      <img src={Image} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="sub-heading"> Mr. Frank Gyamfi </div>
                    <p>Production Manager</p>
                  </div>
                </div>

                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-content">
                      <img src={Image} className="w-100 p-2" alt="about" />
                    </div>
                    <div className="sub-heading">Mr. Emmanuel Sekyere</div>
                    <p>Production Engineer</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Team;