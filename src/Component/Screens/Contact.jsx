import React, { useState, useEffect } from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import DownArrow from "../global/downArrow/DownArrow";
import "./Contact.css";
const Contact = () => {
  
  const containerStyle = {
    width: "100%",
    height: "100vh",
    // backgroundColor: "linear-gradient(to bottom, #000000, #7f7f7f)",
    // padding: "10px",
    color: "white",
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

  const contactInfoStyle = {
    // marginTop: "5px",
    display: "flex",
    alignItems: "center",
  };

  const contactIconStyle = {
    marginRight: "5px",
  };

  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "50%",
  };

  const inputStyle = {
    padding: "10px",
    backgroundColor: "transparent",
    border: "2px solid gray",
    borderRadius: "4px",
    color: "black",
    marginBottom: "7px",
    outline: "none",
  };

  const textareaStyle = {
    padding: "10px",
    backgroundColor: "transparent",
    border: "2px solid gray",
    borderRadius: "4px",
    color: "black",
    marginBottom: "10px",
    outline: "none",
  };

  // const buttonStyle = {
  //   color: "white",
  //   backgroundColor: "linear-gradient(to bottom, #00bcd4, #006064)",
  //   padding: "10px",
  //   borderRadius: "4px",
  //   cursor: "pointer",
  //   transition: "transform 0.2s ease-in-out",
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="contactusbg mb-5">
        <div className="py-5">
          <div className="my-5 py-5">
            <div className="mb-5 py-5">
              <div className=" py-5 text-center blureffect">
                <font size="36" className="txtshdw text-light">
                  "Expert IT solutions for Your business."
                </font>
              </div>
            </div>
            <DownArrow />
          </div>
        </div>
      </section>
      <div style={containerStyle} name="contact" className=" mt-5">
        <div style={contentContainerStyle}>
          <div style={headingStyle} className="text-center sectionPageHeading">
            Connect With Us :
          </div>
          <p className="text-center   sectionPageHeading my-3">
            We know that our clients have unique needs. Send us a message, and
            we will get back to you soon.
          </p>
          <div className=" d-flex justify-content-center align-items-center text-center">
            <div className="row text-center">
              <p style={{ marginTop: "1rem" }} className="col">
                <span style={contactInfoStyle} className="fs-5">
                  <span style={contactIconStyle}>
                    <FiPhoneIncoming />
                  </span>
                  +91-7000682084
                </span>
              </p>

              <p style={{ marginTop: "1rem" }} className="col">
                <span style={contactInfoStyle} className="fs-5">
                  <span style={contactIconStyle}>
                    <MdOutlineMarkEmailRead />
                  </span>
                  vinitikainfotech@gmail.com
                </span>
              </p>
            </div>
          </div>
          <p className="text-center">
            <span>
          <a href="tel:7000682084"> click to make a call </a>
            </span>
            <span className="ms-5">
            <a href="mail:vinitikainfotech@gmail.com"> click to send a mail </a>
            </span>
          </p>
          <p className="text-center mt-2">
            Submit the form below to get in touch with me
          </p>

          <div style={formContainerStyle} className="my-2 ">
            <form
              action="https://getform.io/f/1e693cb1-95c2-408d-b670-3d6d0afb1473"
              method="POST"
              style={formStyle}
              className="blureffect shadow rounded"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                style={inputStyle}
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                style={textareaStyle}
              ></textarea>
              <div class="frame">
                <button className="custom-btn btn-9">Let's talk</button>
                {/* <button className="custom-btn btn-12">
                <span>Click!</span>
                <span>code</span>
              </button> */}
              </div>
              {/* <button style={buttonStyle}>Let's talk</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
