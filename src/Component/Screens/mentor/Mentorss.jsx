import React from "react";
import "./mentorss.css";
//mentor img
import m1 from "../../Assets/reviewUser/tanmay.jpg";
import m2 from "../../Assets/reviewUser/nikhil.jpg";
import m3 from "../../Assets/reviewUser/shani.jpg";
import m4 from "../../Assets/reviewUser/jijaji.png";

function Mentorss() {
    const techs = [
        {
            id: 1,
            src: m1,
            name: "Tanmay Akolkar",
            position: "Founder of Z&T Infotech",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: m4,
            name: "Aditya Jain",
            position: "Managing Director of VNIT Infotech",
            style: "shadow-orange-500",
        },
        {
            id: 3,
            src: m2,
            name: "Nikhil Jain",
            position: "Founder of Sans Web Solutions",
            style: "shadow-orange-500",
        },
        {
            id: 4,
            src: m3,
            name: "Shani Diwakar",
            position: "CTO of Sans Web Solutions",
            style: "shadow-orange-500",
        },
    ];

    return (
        <div>
            <div className="text-center m-4">
                <h2 className="text-center sectionPageHeading"> Our Mentor's</h2>
                <p className="text-center   sectionPageHeading">
                    Meet our exceptional mentors who are CEOs, directors, entrepreneurs,
                    and distinguished leaders in their respective fields. They bring a
                    wealth of experience and expertise to guide and inspire us on our
                    journey.
                </p>
                <div className="row  d-flex justify-content-center">
                    {techs.map(({ id, src, name, position, style }) => (
                        <div
                            key={id}
                            //   style={portfolioItemStyle}
                            className="col-sm-12 col-md-5 col-lg-5 m-2 p-2  align-items-center d-flex justify-content-center"
                        >
                            <figure className="snip1390">
                                <img
                                    src={src}
                                    alt="profile-sample3"
                                    className="profile"
                                />
                                <figcaption>
                                    <h2>{name}</h2>
                                    <h4>{position}</h4>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                    {/* <div className=" ">
                            <img className="desktopImage" src={m1} alt="Tanmay Akolkar" />
                            <p className="text-blk name">Tanmay Akolkar</p>
                            <p className="text-blk position">Founder of Z&T Infotech</p>
                        </div>
                        <div className=" ">
                            <img className="desktopImage" alt="Aditya Jain" src={m4} />
                            <p className="text-blk name">Aditya Jain</p>
                            <p className="text-blk position">MD of VN-Infotech</p>
                        </div>
                        <div className=" ">
                            <img className="desktopImage" src={m2} alt="Nikhil Jain" />
                            <p className="  name">Nikhil Jain</p>
                            <p className="  position">Founder of Sans Web Solutions</p>
                        </div>
                        <div className=" ">
                            <img className="desktopImage" src={m3} alt="Shani Diwakar" />
                            <p className=" name">Shani Diwakar</p>
                            <p className="  position">CTO of Sans Web Solutions</p>
                        </div> */}
                </div>
            </div>
        </div>

    );
}

export default Mentorss;
