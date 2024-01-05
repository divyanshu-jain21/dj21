import React, { useState, useEffect } from 'react';
import "./Reviewuser.css";
import user1 from "../Assets/reviewUser/raghav.png";
import user2 from "../Assets/reviewUser/vashu.jpg";
import user3 from "../Assets/reviewUser/anurag.jpg";


function Reviewuser() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="">
                <div className="row d-flex justify-content-right text-center align-items-center mx-3 p-2">
                  <div className="col-6 d-flex flex-column">
                    <div className="row d-flex justify-content-evenly text-center align-items-center">
                      <div className="rating-box col">
                        <h1 className="pt-4">4.0</h1>
                        <p className="">out of 5</p>
                      </div>
                      <div className="col">
                        <span className="fa fa-star star-active mx-1"></span>
                        <span className="fa fa-star star-active mx-1"></span>
                        <span className="fa fa-star star-active mx-1"></span>
                        <span className="fa fa-star star-active mx-1"></span>
                        <span className="fa fa-star star-inactive mx-1"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="rating-bar0 justify-content-center">
                      <table className="text-left mx-auto">
                        <tr>
                          <td className="rating-label">Excellent</td>
                          <td className="rating-bar">
                            <div className="bar-container">
                              <div className="bar-5"></div>
                            </div>
                          </td>
                          <td className="text-right">123</td>
                        </tr>
                        <tr>
                          <td className="rating-label">Good</td>
                          <td className="rating-bar">
                            <div className="bar-container">
                              <div className="bar-4"></div>
                            </div>
                          </td>
                          <td className="text-right">23</td>
                        </tr>
                        <tr>
                          <td className="rating-label">Average</td>
                          <td className="rating-bar">
                            <div className="bar-container">
                              <div className="bar-3"></div>
                            </div>
                          </td>
                          <td className="text-right">10</td>
                        </tr>
                        <tr>
                          <td className="rating-label">Poor</td>
                          <td className="rating-bar">
                            <div className="bar-container">
                              <div className="bar-2"></div>
                            </div>
                          </td>
                          <td className="text-right">3</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row mt-4">
                <div className="col">
                <div className="container-fluid whatuser shadow-lg rounded px-1 py-2 mx-auto">
                    <div className="row justify-content-center">
                      <div className=" text-center mb-3">
                        <div className="">
                          <div className="row d-flex">
                            <div className="">
                              <img className="profile-pic" src={user1} />
                            </div>
                            <div className="d-flex flex-column">
                              <h4 className="mt-1 mb-0 sectionPageHeading">Raghav Sharma</h4>
                            </div>
                            <div className="ml-auto">
                              <p className="text-muted">10 Sept</p>
                            </div>
                          </div>
                          <div className="row text-left">
                            <p className="sectionPageHeading">
                              "An awesome activity to experience"
                            </p>
                            <p className="small">
                              Team was very helpful, reachable and comes with
                              diverse experience in different types of process
                              which helped us in testing the products and make a
                              robust solution.
                            </p>
                          </div>
                          <div className="row text-left">
                            <div className="like mr-3 vote">
                              <img src="https://i.imgur.com/mHSQOaX.png" />
                              <span className="blue-text pl-2">20</span>
                            </div>
                            <div className="unlike vote">
                              <img src="https://i.imgur.com/bFBO3J7.png" />
                              <span className="text-muted pl-2">4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container-fluid whatuser shadow-lg rounded px-1 py-2 mx-auto">
                    <div className="row justify-content-center">
                      <div className="text-center mb-3">
                        <div className="">
                          <div className="row d-flex">
                            <div className="">
                              <img className="profile-pic" src={user2} />
                            </div>
                            <div className="d-flex flex-column">
                              <h4 className="mt-1 sectionPageHeading mb-0">Vashu Pandey</h4>
                            </div>
                            <div className="ml-auto">
                              <p className="text-muted">23 Oct</p>
                            </div>
                          </div>
                          <div className="row text-left">
                            <p className="sectionPageHeading">
                              “The VIT team is extremely knowledgeable and
                              helpful, it is a delight to work with them.”
                            </p>
                            <p className="small">
                              Vinitika Info-Tech is a company that specializes in web design, web
                              development, and internet marketing.
                            </p>
                          </div>
                          <div className="row text-left">
                            <div className="like mr-3 vote">
                              <img src="https://i.imgur.com/mHSQOaX.png" />
                              <span className="blue-text pl-2">110</span>
                            </div>
                            <div className="unlike vote">
                              <img src="https://i.imgur.com/bFBO3J7.png" />
                              <span className="text-muted pl-2">14</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container-fluid whatuser shadow-lg rounded px-1 py-2 mx-auto">
                    <div className="row justify-content-center">
                      <div className="text-center mb-3">
                        <div className="">
                          <div className="row d-flex">
                            <div className="">
                              <img className="profile-pic" src={user3} />
                            </div>
                            <div className="d-flex flex-column">
                              <h4 className="mt-1 sectionPageHeading mb-0">Anurag Soni</h4>
                            </div>
                            <div className="ml-auto">
                              <p className="text-muted">22 jan</p>
                            </div>
                          </div>
                          <div className="row text-left">
                            <p className="sectionPageHeading">
                              “The service quality was exceptional, I can’t
                              wait to come back”
                            </p>
                            <p className="small">
                              VIT is a company that provides web
                              design and development services. They are polite,
                              good Price, and they have potential.
                            </p>
                          </div>
                          <div className="row text-left">
                            <div className="like mr-3 vote">
                              <img src="https://i.imgur.com/mHSQOaX.png" />
                              <span className="blue-text pl-2">20</span>
                            </div>
                            <div className="unlike vote">
                              <img src="https://i.imgur.com/bFBO3J7.png" />
                              <span className="text-muted pl-2">4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Reviewuser;
