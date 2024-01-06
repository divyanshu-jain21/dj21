import React, { useState, useEffect } from "react";
import adroit from "../Assets/portfolio/adroit.jpg";
import chikooja from "../Assets/portfolio/chikooja.jpg";
import cosmos from "../Assets/portfolio/cosmos.jpg";
import crypto from "../Assets/portfolio/Crypto.jpg";
import rgfba from "../Assets/portfolio/rgfba.jpg";
import satya from "../Assets/portfolio/satya.jpg";
import "./Portfolio.css";
import DownArrow from "../global/downArrow/DownArrow";
const Portfolio = () => {
  // Array of portfolio items with their respective images
  const portfolios = [
    { id: 1, src: crypto },
    { id: 2, src: adroit },
    { id: 3, src: chikooja },
    { id: 4, src: rgfba },
    { id: 5, src: satya },
    { id: 6, src: cosmos },
  ];

  // Define styles as objects
  const containerStyle = {
    // background: 'linear-gradient(to bottom, #000000, #7f7f7f)',
    color: "white",
    minHeight: "100vh",
    // padding: "2rem",
  };
  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    // padding: "10px",
    maxWidth: "100%",
    margin: "0 ",
    height: "100%",
    justifyContent: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    borderBottom: "4px solid #888888",
    display: "inline-block",
  };

  const paragraphStyle = {
    paddingTop: "1.5rem",
  };

  // const portfolioItemStyle = {
  //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  //   borderRadius: "8px",
  //   flex: "0 0 calc(50% - 16px)", // Three items in a row with some margin
  //   margin: "8px",
  //   transition: "transform 0.2s ease-in-out",
  //   background: "black",
  // };

  // const imageStyle = {
  //   width: "100%",
  //   height: "auto", // Make sure the height adjusts accordingly
  //   borderRadius: "8px",
  // };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    width: "50%",
    padding: "0.75rem",
    margin: "0.5rem",
    transition: "transform 0.2s ease-in-out",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={containerStyle} name="portfolio" className="">
      <section className="portfoliobg">
        <div className="py-5">
          <div className="my-5 py-5">
            <div className="mb-5 py-5">
              <div className="text-center blureffect">
                <font className="txtshdw">
                  "Building Digital Dreams, Delivering Technological Triumphs."
                </font>
              </div>
            </div>
            <DownArrow />
          </div>
        </div>
      </section>
      <div style={contentContainerStyle} className="text-center mt-3 mx-5 px-5">
        <div style={headingStyle} className="sectionPageHeading">
          Portfolio
        </div>
        <p
          style={paragraphStyle}
          className="text-center   sectionPageHeading my-3"
        >
          We work closely with our clients to understand their unique needs and
          develop customized solutions that meet those needs.
          <br /> Our agile development process ensures that our clients are
          involved every step of the way.
        </p>
        <p style={paragraphStyle} className="text-center">
          Check out some of my work right here
        </p>
        <div className="row mt-2">
          {portfolios.map(({ id, src }) => (
             
         
                <div  key={id} className="col-sm-6 col-md-4 mb-3 gallery">
                  <img
                    src={src}
                    alt=""
                    className="fluid img-thumbnail"
                  />
                </div>
         

              // {/* <img
              //   src={src}
              //   alt=""
              //   style={imageStyle}
              //   className="rounded duration-200 hover:scale-105"
              // /> */}
             
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
