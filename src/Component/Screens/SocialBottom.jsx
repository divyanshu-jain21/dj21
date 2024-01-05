import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa";
import "./SocialBottom.css"; // You can create a CSS file for styling

const SocialIcons = () => {

  
  return (
    <div className="social-icons-container">
      <section className="">
        <div className="icon-wrapper">
          <div className="icon-item">
            <a>
            <FaGithub className="fs-2 text-dark rounded" />
            </a>
          </div>
          <div className="icon-item">
          <a>
            <FaLinkedin className="fs-2 text-primary rounded"/>
            </a>
          </div>
          <div className="icon-item">
          <a>
            <FaInstagramSquare className="fs-2 text-info rounded"/>
            </a>
          </div>
          <div className="icon-item">
          <a>
            <FaEnvelope className="fs-2 text-danger rounded"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialIcons;
