import React from 'react';
import {Link} from 'react-router-dom';
import Team2 from '../../images/team2.jpeg';
import Team1 from '../../images/team1.jpeg';

function AboutSection() {
    return (
      <section className="section border-top">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">
                About Afriyie Wealth Company Limited
              </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-4 p-4">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/watch?v=EbDN2hxDnXE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-md-6 mb-4 p-4">
                    <h6 className="sub-heading">Our Story</h6>
                    <p>
                      AFRIYIE WEALTH Company is a limited liability company
                      registered under the corporate laws of the republic of
                      Ghana with certificate of registration No. CS238002018 and
                      was incorporated on 5th September 2018. .
                    </p>
                    <div>
                      <Link to="/about" className="btn btn-warning shadow">
                        Read More..
                      </Link>
                    </div>
                    <div>
                      <hr></hr>
                    </div>

                    <div className="row">
                      <div className="col-md-6 p-2 ">
                        <img
                          src={Team1}
                          className="w-100 border-botton"
                          alt="about"
                        />
                      </div>

                      <div className="col-md-6 p-2 ">
                        <img
                          src={Team2}
                          className=" w-100 border-botton"
                          alt="services"
                        />
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

export default AboutSection;