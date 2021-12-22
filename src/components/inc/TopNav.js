import React from 'react';
import {Link} from 'react-router-dom';
import {MdCall} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

function TopNav() {
    return (
      <div className="top-nav pt-1 text-white text-center">
        <div className="container">
          <div className="row social">
            <div className="col-md-4">
              <p>
                <MdCall size="30" /> +233 (0)555 675 083 / +233 (0)273 767 705
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <MdEmail size="30" /> info@afriyiewealth.com
              </p>
            </div>
            <div className="col-md-4">
              <Link to="/" className="social">
                {" "}
                <FaFacebookSquare size="30" />{" "}
              </Link>
              <Link to="/" className="social">
                {" "}
                <FaTwitter size="30" />{" "}
              </Link>
              <Link to="/" className="social">
                {" "}
                <FaInstagram size="30" />{" "}
              </Link>
              <Link to="/" className="social">
                {" "}
                <FaYoutube size="30" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};
export default TopNav;