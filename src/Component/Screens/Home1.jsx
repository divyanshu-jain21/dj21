import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
// import Accordion from "react-bootstrap/Accordion";
import { Accordion } from "react-bootstrap";
import logo from "../Assets/logoimg/0234.png";
// carousel
import img1 from "../Assets/softdev.jpg";
import img2 from "../Assets/wevdep.jpeg";
import img3 from "../Assets/appdev.png";
import ourservice from "../Assets/ourservice.png";
import keys from "../Assets/keys.png";
// tech logo
import tech1 from "../Assets/techimg/aws.png";
import tech2 from "../Assets/techimg/git.png";
import tech3 from "../Assets/techimg/mongo.png";
import tech4 from "../Assets/techimg/Python.png";
import tech5 from "../Assets/techimg/React.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Home1.css";
import Reviewuser from "./Reviewuser";
import Cards from "./whyChooseUs/Cards";
function Home1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* -----------------logo---------------- */}
      <section>
        <div id="box"></div>
        <div className="logo d-flex justify-content-center">
          <img src={logo} className="my-4 imgsize img-fluid" alt=".." />
        </div>

        {/* -----------------------carousel img-------------- */}
        <div className="mt-3">
          <div className="mx-2">
            <div className="body dark-background">
              <div className="outer-border">
                <div className="mid-border">
                  <div className="inner-border">
                    {/* <!-- Page Content --> */}
                    <div className="container my-2">
                      <div className="row">
                        <div className="column-lg-12 text-center">
                          <Carousel fade>
                            <Carousel.Item className="d-flex justify-content-center">
                              <img
                                src={img1}
                                className="w-100"
                                alt="..."
                                text="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item className="d-flex justify-content-center">
                              <img
                                src={img2}
                                className="w-100"
                                alt="..."
                                text="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item className="d-flex justify-content-center">
                              <img
                                src={img3}
                                className="w-100"
                                alt="..."
                                text="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* ----------------our services------------------ */}
      <section className="m-2 p-2">
        <h2 className="text-center my-1 sectionPageHeading">Our Services</h2>
        <p className="text-center sectionPageHeading   my-3">
          We love making customized solutions for your organizations and offer
          our administrations that<br></br> covers each part of eCommerce
          development guaranteeing conveyance of substantial business results.
        </p>
        <div className="row23">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="column23">
                  <div className="card23  blureffect shadow">
                    <h5 className="">Mobile Apps Solutions</h5>
                    <hr></hr>
                    <p className="">
                      Our team of experts is dedicated to building custom mobile
                      app solutions for iOS, Android by utilising latest
                      technologies to solve unique and challenging business
                      problems.
                    </p>
                  </div>
                </div>
                <div className="column23">
                  <div className="card23  blureffect shadow">
                    <h5 className="">Web Application solutions</h5>
                    <hr></hr>
                    <p className="">
                      Creative web solutions blended with latest technologies
                      form the right base for innovative businesses. At sws, our
                      focus is on building and delivering excellence at each
                      level.
                    </p>
                  </div>
                </div>
                <div className="column23">
                  <div className="card23 h-50  blureffect shadow">
                    <h5 className="">Website Design solutions</h5>
                    <hr></hr>
                    <p className="">
                      We believe that the look of a website or mobile app is as
                      important as it’s functioning. We provide the soul to
                      every project with blueprints that reflect originality.
                    </p>
                  </div>
                </div>
                <div className="column23">
                  <div className="card23  blureffect shadow">
                    <h5 className="">Animation & Graphic Designing</h5>
                    <hr></hr>
                    <p className=" ">
                      We specialize in implementing strategic approaches to
                      enhance website traffic by crafting compelling static
                      visual content and dynamic moving images.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="column-12 column-md-12 column-lg-6 column-xl-6 m-2 p-2">
                  <img src={ourservice} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* ----------------keys------------------ */}
      <section className="m-2 p-2">
        <h2 className="text-center my-3 sectionPageHeading">Keys</h2>
        <p className="text-center   sectionPageHeading my-3">
          Setting up a website that is intuitive, user-friendly, responsive, and
          accurately represents your brand <br></br>Developing a web application
          to make it easier for people to interact with your business
        </p>
        {/* <div className="container">
          <div className="row"> */}
        {/* <div className="column-12 column-md-12 column-lg-5 column-xl-5">
              <img src={keys} className="d-block w-100" alt="..." />
            </div> */}
        {/* <div className="column-12 column-md-12 column-lg-7 column-xl-7 mt-2 pt-2"> */}
        {/* <h3>Keys</h3>
              <p className="blureffect">
                Setting up a website that is intuitive, user-friendly,
                responsive, and accurately represents your brand Developing a
                web application to make it easier for people to interact with
                your business
              </p> */}

        <div className="blureffect">
          <Tabs
            defaultActiveKey="Responsive"
            id="justify-tab"
            className="mb-3 px-2 mx-2   sectionPageHeading"
            justify
          >
            <Tab
              eventKey="Responsive"
              title="Responsive design"
              className=" "
            >
              Responsive design is a graphic user interface (GUI) design
              approach used to create content that adjusts smoothly to various
              screen sizes. Designers size elements in relative units (%) and
              apply media queries, so their designs can automatically adapt to
              the browser space to ensure content consistency across devices.
            </Tab>
            <Tab
              eventKey="web"
              title="React web development"
              className=" "
            >
              React.js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications. It’s used for handling the view layer for web and
              mobile apps. React also allows us to create reusable UI
              components.{" "}
            </Tab>
            <Tab eventKey="Apps" title="Apps Development" className=" ">
              <em>Android Apps Development :</em> <br />
              Android development is a branch of mobile development which deals
              with the creation of apps for smartphones and similar devices.
              While mobile development is a vast field, it is divided into
              sections according to the operating systems one works on.
              <hr></hr>
              <em>iOS Apps Development :</em> <br />
              iOS application development is the process of making mobile
              applications for Apple hardware, including iPhone, iPad, and iPod
              Touch. The software is written in the Swift programming language
              or Objective-C and then deployed to the App Store for users to
              download.
            </Tab>
            <Tab eventKey="UIDesign" title=" UX/UI Design" className=" ">
              UX Design refers to the term User Experience Design, while UI
              Design stands for User Interface Design. Both elements are crucial
              to a product and work closely togetherUser experience (UX) refers
              to any interaction a user has with a product or service.
            </Tab>
            <Tab
              eventKey="commerce"
              title=" E-commerce Development"
              className=" "
            >
              E-commerce is the activity of buying or selling products on online
              services or over the Internet. eCommerce is often used to refer to
              the sale of physical products online, but it can also describe any
              kind of commercial transaction that is facilitated through the
              internet.
            </Tab>
          </Tabs>
        </div>
      </section>
      <hr></hr>
      {/* ------------------tech logo------------------  */}
      <section>
        {/* <div className="card-group"> */}
        <div className="techimgall d-flex justify-content-center flex-wrap">
          <img src={tech1} className="imagetech img-fluid" alt="..." />
          <img src={tech2} className="imagetech img-fluid" alt="..." />
          <img src={tech3} className="imagetech img-fluid" alt="..." />
          <img src={tech4} className="imagetech img-fluid" alt="..." />
          <img src={tech5} className="imagetech img-fluid" alt="..." />
        </div>
      </section>
      <hr></hr>
      {/* --------------why choose us--------------  */}
      <section>
        <h2 className="text-center my-3 sectionPageHeading">Why Choose Us?</h2>
        <p className="text-center   sectionPageHeading my-3">
          By Combining our technical Skill with your company’s goals, scope and
          expert insight<br></br> we are able to create a high effective
          finished product within your budget.
        </p>
        <div>
          <Cards />
          {/* <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front blureffect">
                  <h3 className="">Strict NDA</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Strict NDA
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    To keep your idea or concept confidential we sign a strict
                    non-disclosure agreement for the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Affordable costing</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Affordable costing
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    We understand every project has a budget in this highly
                    competitive market, hence we provide affordable pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Honest Consultation</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Honest Consultation
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    You buy from us or not, technical consultation by our
                    experts are always open and honest.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>On-Time Delivery</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    On-Time Delivery
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    We understand time is money and do not like to waste the
                    time of either of them, Our project deliveries are as always
                    on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Free Bug Resolution</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Free Bug Resolution
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    It's not a one time job, we assure quality and hence we
                    provide free bug resolution post-deployment to ensure your
                    system runs smooth and error free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>End-to-End Solution</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    End-to-End Solution
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    You don't need to manage and follow up multiple vendors to
                    build your project, we provide end-to-end technology
                    solutions for your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3> Excellent Support</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Excellent Support
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    We very well know that we are into a service-based industry
                    and what matters is after-sales support and hence our job
                    doesn't just end with development service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Development Partner</h3>
                </div>
                <div className="flip-card-back">
                  <h5 className="align-items-center text-center m-2 sectionPageHeading">
                    Development Partner
                  </h5>
                  <hr></hr>
                  <p className="m-2 p-2 text-dark">
                    We work more as a long term development partner rather than
                    one time job. We believe we can expand only when our client
                    grows.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <hr></hr>
      {/* --------------What Users Saying--------------  */}
      <section className="mb-3">
        <h2 className="text-center my-3 sectionPageHeading">
          What Users Saying
        </h2>
        <p className="text-center   sectionPageHeading my-3 mx-5 px-5">
          We started Vinitika Infotech in January, 2023 with the goal of
          creating innovative software solutions that make people's lives
          easier. Since then, we've grown into a team of 10 employees and have
          worked with clients from around the Country.
        </p>
        <div className="container ">
          <div className="row">
            <div className="">
              <Reviewuser />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home1;
