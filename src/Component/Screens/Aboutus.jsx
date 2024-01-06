import React, { useState, useEffect } from "react";
import about1 from "../Assets/about2.png";
//mentor img
import m1 from "../Assets/reviewUser/tanmay.jpg";
import m2 from "../Assets/reviewUser/nikhil.jpg";
import m3 from "../Assets/reviewUser/shani.jpg";
import m4 from "../Assets/reviewUser/jijaji.png";

//teams img
import t1 from "../Assets/reviewUser/puneet.jpeg";
import t2 from "../Assets/reviewUser/aman.jpg";
import t3 from "../Assets/reviewUser/aditya.png";
import t4 from "../Assets/reviewUser/dj.png";

import DownArrow from "../global/downArrow/DownArrow";

import "./Aboutus.css";
import Mentorss from "./mentor/Mentorss";

// Define styles as objects
const containerStyle = {
  // background: "linear-gradient(to bottom, #333333, #000000)",
  color: "white",
  minHeight: "100vh",
  // padding: "1rem",
};
const contentContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
  maxWidth: "100%",
  margin: "0 auto", // Center the container horizontally
  height: "100%",
  // textAlign: "center", // Center the text
};
const headingStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  borderBottom: "4px solid #888888",
  display: "inline-block",
};

const paragraphStyle = {
  paddingTop: "1.5rem",
};

function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={containerStyle}>
      <section className="aboutus">
        <div className="py-5">
          <div className="my-5 py-5">
            <div className="mb-5 py-5">
              <div className=" text-center blureffect">
                <font className="txtshdw">
                  "Expert IT solutions for Your business."
                </font>
              </div>
            </div>
            <DownArrow />
          </div>
        </div>
      </section>
      {/* ----------------about us------------------ */}
      <section className="m-2 p-2">
        <div style={contentContainerStyle}>
          <p style={headingStyle} className="text-center sectionPageHeading">
            About Vinitika Infotech :
          </p>
          <p
            style={paragraphStyle}
            className="text-center sectionPageHeading "
          >
            About Vinitika Infotech, Welcome to Vinitika Infotech, where
            innovation meets expertise! Established in March 2023, we are a
            dynamic and forward-thinking technology company committed to
            delivering cutting-edge solutions in the ever-evolving landscape of
            IT.
          </p>
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <img src={about1} className="d-block w-100" alt="..." />
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              {/* <h2 className="text-primary">About VITS</h2> */}
              <p className="blureffect   sectionPageHeading">
                <h3 className=" sectionPageHeading mt-2">Our Expertise</h3>
                <hr></hr>
                At Vinitika Infotech, we specialize in a spectrum of services
                that cater to your digital needs. Whether you're looking for
                captivating frontend development, robust backend solutions,
                mobile application animations, or integration of the latest
                technologies, we've got you covered.
                <h3 className=" sectionPageHeading mt-2">
                  Our Technology Stack
                </h3>
                <hr></hr>
                Our seasoned team of professionals excels in a diverse range of
                technologies, including: Frontend Development: HTML, CSS,
                JavaScript, React, Angular, Vue ect Backend Development: Python,
                Node.js, Java SQL, Azure, AWS, Express.js Database Management:
                MongoDB
                <h3 className=" sectionPageHeading mt-2">Our Approach</h3>
                <hr></hr>
                We take pride in our client-centric approach, tailoring our
                solutions to meet your unique requirements. Our journey since
                inception has been marked by a commitment to excellence,
                ensuring that we not only keep pace with industry trends but
                also stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------our mentor--------------  */}
      <section className="mb-3 mx-5 px-5">
        <Mentorss/>
        {/* <div className="text-center m-4">
          <h2 className="text-center sectionPageHeading">
            Our Mentor's <br />
          </h2>
          <p className="text-center   sectionPageHeading">
            Meet our exceptional mentors who are CEOs, directors, entrepreneurs,
            and distinguished leaders in their respective fields. They bring a
            wealth of experience and expertise to guide and inspire us on our
            journey.
          </p>
        </div>
        <div className="ag-format-container">
          <div className="ag-courses_box d-flex justify-content-evenly">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <img
                  src={m1}
                  className="img-fluid ag-courses-item_date-box"
                  alt="Tanmay Akolkar"
                />
                <div className="ag-courses-item_title">Tanmay Akolkar</div>
                <div className="ag-courses-item_date-box">
                  Founder of Z&T Infotech
                </div>
                <p className="m-2 ag-courses-item_date-box">
                  <small>
                    10+ year Experienced in Fullstack development with Java,
                    Python, React, JAvaScript and more..
                  </small>
                </p>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <img
                  src={m2}
                  className="img-fluid ag-courses-item_date-box"
                  alt="Nikhil Jain"
                />
                <div className="ag-courses-item_title">Nikhil Jain </div>
                <div className="ag-courses-item_date-box">
                  Founder of Sans Web Solutions
                </div>
                <p className="m-2 ag-courses-item_date-box">
                  <small>
                    6+ year Experienced in Fullstack development with React JS,
                    Node JS technologies.
                  </small>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="ag-format-container">
          <div className="ag-courses_box  d-flex justify-content-evenly">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <img
                  src={m3}
                  className="img-fluid w-100 ag-courses-item_date-box"
                  alt="Shani Diwakar"
                />
                <div className="ag-courses-item_title">Shani Diwakar</div>
                <div className="ag-courses-item_date-box">
                  CTO of Sans Web Solutions
                </div>
                <p className="m-2 ag-courses-item_date-box">
                  <small>
                    5+ year Experienced in iOS/Android development with
                    React-native, Angular & JavaScript and more..
                  </small>
                </p>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <img
                  src={m4}
                  className="img-fluid ag-courses-item_date-box"
                  alt="Aditya Jain"
                />
                <div className="ag-courses-item_title">Aditya Jain </div>
                <div className="ag-courses-item_date-box">
                  Founder of Sans Web Solutions
                </div>
                <p className="m-2 ag-courses-item_date-box">
                  <small>
                    6+ Experience in Backend Development
                    <br />
                    Expertise: Low-level Design & System Design
                  </small>
                </p>
              </a>
            </div>
          </div>
        </div> */}
      </section>
     

      {/* -------------Our team member-------------- */}

      <section className="mb-3">
        <div className="text-center m-4">
          <h2 className="text-center sectionPageHeading">
            Lead Developer <br />
          </h2>
          <p className="text-center   sectionPageHeading">
            Our technical programmers are seasoned experts, leaders in their
            domains, guiding the way in coding excellence and technological
            innovation.
          </p>
        </div>
        {/* --------------------------------- */}

        <div className="card-group m-4 p-3 row d-flex justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-5 m-2 p-2 blureffect align-items-center d-flex justify-content-center">
            <img
              className="imagesmember imgclr1 text-center "
              src={t1}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title sectionPageHeading">Puneet Tamrakar</h5>{" "}
              <p className="card-text sectionPageHeading">
                <small>
                  <li> 4+ year Experienced in Animation & Designing.</li>
                  <li> Creative Lead</li>
                </small>
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 m-2 p-2 blureffect align-items-center d-flex justify-content-center">
            <img className="imagesmember imgclr2" src={t2} alt="..." />{" "}
            <div className="card-body">
              <h5 className="card-title sectionPageHeading">Aman Kushwah</h5>{" "}
              <p className="card-text sectionPageHeading">
                <small>
                  <li> 2+ year Experienced in full-stack development.</li>
                  <li>Skills: React.js, Nodejs, Mongodb, javascript..</li>
                </small>
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 m-2 p-2 blureffect align-items-center d-flex justify-content-center">
            <img className="imagesmember imgclr3" src={t3} alt="..." />{" "}
            <div className="card-body">
              <h5 className="card-title sectionPageHeading">Aditya Jain</h5>
              <p className="card-text sectionPageHeading">
                <small>
                  <li>2+ years experience in Python Development.</li>
                  <li>worked on Multiple frameworks: Django, Flask.</li>
                </small>
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 m-2 p-2 blureffect align-items-center d-flex justify-content-center">
            <img className="imagesmember imgclr4" src={t4} alt="..." />{" "}
            <div className="card-body">
              <h5 className="card-title sectionPageHeading">Divyanshu Jain</h5>
              <p className="card-text sectionPageHeading">
                <small>
                  <li> 2+ year Experienced in full-stack development.</li>
                  <li>Skills: React.js, Python, Sql, javascript, AWS.</li>
                </small>
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
        </div>

        {/* -------------------- */}
        
      </section>

      <div className="mx-4 px-4">
        <p className="blureffect   my-3  sectionPageHeading">
          <h3 className=" sectionPageHeading">
            Join Us on the Innovation Journey
          </h3>
          <hr></hr>
          Whether you're a startup looking to make your mark or an established
          enterprise seeking transformation, Vinitika Infotech is your dedicated
          partner. Our passion for technology and relentless pursuit of
          excellence have earned us recognition and trust across various
          industries. As we continue to grow and evolve, we invite you to join
          us on the path to transformative IT solutions and a future filled with
          endless possibilities. Explore the potential. Embrace innovation.
          Choose Vinitika Infotech.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
