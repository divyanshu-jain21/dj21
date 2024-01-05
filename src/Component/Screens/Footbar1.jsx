import React from "react";
import "./Footbar1.css";
import logo from "../Assets/logoimg/023.png";
import SocialBottom from "./SocialBottom";
const Footbar1 = () => {
  return (
    <>
      <footer className="w-100">
        <hr className="text-primary fw-25"></hr>
        <div className="container py-4">
          <div className="row text-center align-items-center d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
              <img src={logo} className="mb-2 w-50" alt=".." />
              <p className="small text-muted">
                We are working on a problem, never think about beauty. We only
                think how to solve the problem. But when we have finished, if
                the solution is not beautiful, We know it is wrong.
              </p>
              <p className="small text-primary mb-0">
                © 2023 Vinitika Infotech. All rights reserved.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">

            <div class="container">
  <div className="content">
    <div className="icon-container">
      <div className="icon icon-fill">
        <i className="fa fa-home"></i>
      </div>
      <div className="icon icon-enter">
        <i className="fa fa-user"></i>
      </div>
      <div className="icon icon-expand">
        <i className="fa fa-bars"></i>
      </div>
      <div className="icon icon-collapse">
        <i className="fa fa-sign-in"></i>
      </div>
      <div className="icon icon-rotate">
        <i className="fa fa-phone"></i>
      </div>
    </div>
  </div>
</div>

              {/* <p className="text-center">
                <span>
                  <a href="tel:7000682084"> click to make a call </a>
                </span>
                <br />
                <span className="">
                  <a href="mail:vinitikainfotech@gmail.com">
                    {" "}
                    click to send a mail{" "}
                  </a>
                </span>
              </p> */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* <h5 className="text-white mb-3">Newsletter</h5> */}
              <p className="small text-muted my-3">
                Get the Info you're Looking for right now
              </p>

              <a className="button" href="mailto:vinitikainfotech@gmail.com">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <SocialBottom />
        </div>
      </footer>
    </>
  );
};

export default Footbar1;
