import React, { useState, useEffect } from "react";
import "./Technology.css";
import html from "../Assets/technology/html.png";
import css from "../Assets/technology/css.png";
import javascript from "../Assets/technology/javascript.png";
import reactImage from "../Assets/technology/react.png";
import python from "../Assets/technology/python.png";
import java from "../Assets/technology/java.png";
import sql from "../Assets/technology/sql.png";
import aws from "../Assets/technology/aws.png";
import node from "../Assets/technology/node.png";
import DownArrow from "../global/downArrow/DownArrow";

const Technology = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-300" },
    { id: 5, src: node, title: "Node", style: "shadow-green-400" },
    { id: 6, src: python, title: "Python", style: "shadow-blue-400" },
    { id: 7, src: java, title: "Java", style: "shadow-orange-200" },
    { id: 8, src: sql, title: "SQL", style: "shadow-gray-200" },
    { id: 9, src: aws, title: "AWS", style: "shadow-blue-600" },
  ];

  // Define styles as objects
  const containerStyle = {
    // background: "linear-gradient(to bottom, #333333, #000000)",
    color: "white",
    minHeight: "100vh",
    // padding: "1rem",
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
  const portfolioItemStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    flex: "0 0 calc(18% - 16px)", // Four items in a row with some margin
    margin: "8px",
    transition: "transform 0.2s ease-in-out",
    // background: "black",
  };
  const imageStyle = {
    width: "100%",
    height: "auto", // Make sure the height adjusts accordingly
    borderRadius: "8px",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={containerStyle} name="experience" className="">
      <section className="techbg">
        <div className="py-5">
          <div className="my-5 py-5">
            <div className="mb-5 py-5">
              <div className=" py-5 text-center blureffect">
                <font size="36" className="txtshdw">
                  "Pioneering the Future of Software Innovation."
                </font>
              </div>
            </div>
            <DownArrow />
          </div>
        </div>
      </section>
      <div style={contentContainerStyle} className="text-center mt-3">
        <p style={headingStyle} className="sectionPageHeading">
          Technologies :
        </p>
        <p
          style={paragraphStyle}
          className="  text-center sectionPageHeading my-2"
        >
          We use the latest technology and tools to develop software solutions
          that are fast, reliable, and scalable.
          <br /> Our expertise includes cloud computing, artificial
          intelligence, and blockchain technology.
        </p>
        {/* ------------------------------  */}
        <div className="mx-1 px-4">
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">
              Languages and Libraries :
            </h2>
            <h3 className=" sectionPageHeading">Frontend:</h3>
            <ul>
              <li>
                JavaScript: At the heart of web development, JavaScript is the
                foundational language, driving interactive and dynamic user
                experiences.
              </li>
              <li>
                EcmaScript: The standardized scripting language that underlies
                JavaScript, ensuring consistency and compatibility across
                different environments.
              </li>
              <li>
                HTML: The markup language that structures and organizes content
                on the web, providing the foundation for web pages.
              </li>
              <li>
                ReactJS: Leveraging the power of JavaScript, ReactJS emerges as
                a popular library for crafting efficient user interfaces and
                reusable UI components.
              </li>
            </ul>
            <h3 className=" sectionPageHeading">Backend:</h3>
            <ul>
              <li>
                Python: A versatile and high-level programming language, Python
                seamlessly integrates into backend development, offering
                readability and flexibility.
              </li>
              <li>
                Node.js: Description: Node.js is a JavaScript runtime built on
                the V8 JavaScript engine. It allows developers to run JavaScript
                on the server side, enabling the development of scalable and
                fast network applications.
              </li>
              <li>
                Java: Description: Java is a general-purpose, object-oriented
                programming language known for its portability and wide
                adoption.
              </li>

              <li>
                SQL / MySQL: Essential for database management, SQL (Structured
                Query Language) and MySQL enable the storage and retrieval of
                structured data.
              </li>
              <li>
                Unix / Linux: Operating systems like Unix and Linux serve as
                reliable environments for deploying web applications, ensuring
                stability and security.
              </li>
              <li>
                MongoDB: Description: MongoDB is a NoSQL database that stores
                data in flexible, JSON-like documents. It is known for its
                scalability, flexibility, and ease of use.
              </li>
            </ul>
            <hr></hr>
          </p>
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">Styling Tools:</h2>
            <h3 className=" sectionPageHeading">
              The visual appeal of web pages is enhanced through a variety of
              styling tools:
            </h3>
            <hr></hr>
            <ul>
              <li>
                CSS: The styling language that transforms web content, CSS
                provides the means to create visually captivating layouts.
              </li>
              <li>
                Bootstrap: A front-end framework, Bootstrap simplifies the
                development of responsive and visually appealing designs.
              </li>
              <li>
                Material-UI: Built for React, Material-UI implements Google's
                Material Design, offering a sleek and consistent look and feel.
              </li>
              <li>
                MD-Bootstrap: A Material Design adaptation of the Bootstrap
                framework, combining the strengths of both design philosophies.
              </li>
              <li>
                React-Bootstrap: Seamlessly integrating Bootstrap with React
                components, React-Bootstrap facilitates the creation of
                responsive user interfaces.
              </li>
            </ul>
          </p>
          {/* ------------ */}
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">Package Management:</h2>
            {/* <h3 className=" sectionPageHeading">
          The visual appeal of web pages is enhanced through a variety of styling tools:
        </h3> */}
            <hr></hr>
            <ul>
              <li>
                NPM (Node Package Module): As the package manager for JavaScript
                and Node.js, NPM streamlines the process of managing project
                dependencies, ensuring efficient development workflows.
              </li>
            </ul>
          </p>
          {/* ------------- */}
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">
              Version Control and Repositories:
            </h2>
            <h3 className=" sectionPageHeading">
              Collaboration and code management are streamlined through version
              control systems and repositories:{" "}
            </h3>
            <hr></hr>
            <ul>
              <li>
                Git, GitHub, GitLab, BitBucket: These platforms provide version
                control capabilities, enabling teams to collaborate on code,
                manage changes, and store repositories effectively.
              </li>
            </ul>
          </p>
          {/* ------------- */}
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">Testing:</h2>
            <h3 className=" sectionPageHeading">
              Ensuring the reliability and functionality of web applications
              involves various testing methodologies: <hr></hr>
            </h3>
            <ul>
              <li>
                Manual Testing: Thoroughly testing software manually to identify
                and address defects.
              </li>
              <li>
                Functional Testing: Validating that the software meets its
                intended functionality.
              </li>
              <li>
                Regression Testing: Ensuring that new code changes do not
                adversely impact existing functionality.
              </li>
            </ul>
          </p>
          {/* ------------- */}
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">API Testing:</h2>
            {/* <h3 className=" sectionPageHeading">
              Collaboration and code management are streamlined through version
              control systems and repositories:{" "}
            </h3> */}
            <hr></hr>
            <ul>
              <li>
                Postman: A versatile tool for testing APIs, Postman facilitates
                the sending of requests and receiving of responses, ensuring API
                functionality and reliability.
              </li>
            </ul>
          </p>
          {/* ------------- */}
          <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">Operating Systems:</h2>
            {/* <h3 className=" sectionPageHeading">
              Collaboration and code management are streamlined through version
              control systems and repositories:{" "}
            </h3> */}
            <hr></hr>
            <ul>
              <li>
                Windows and Linux: Familiarity with these two common operating
                systems is essential for developers, offering flexibility in
                choosing environments.
              </li>
            </ul>
          </p>
           {/* ------------- */}
           <p className="blureffect   my-3  sectionPageHeading">
            <h2 className=" sectionPageHeading">Development Utilities:

</h2>
            <h3 className=" sectionPageHeading">
            Efficient coding and project management are supported by essential development utilities:


            </h3>
            <hr></hr>
            <ul>
              <li>
              Visual Studio Code (VS Code): A popular code editor for writing and debugging code, offering a lightweight yet powerful environment 
              </li>
              <li>
              Jira: A comprehensive project management and issue tracking tool, Jira is often utilized in software development for streamlined project workflows. 
              </li>
            </ul>
          </p>
        </div>

        {/* -------------------------------------  */}
        <div className="row my-4 mx-1 justify-content-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              style={portfolioItemStyle}
              className="col-12 col-sm-12 col-md-6 col-lg-4 blureffect shadow"
            >
              <img className="img-fluid" src={src} alt="Card image cap" />
              <div className="card-body">
                <h5 className=" text-center text-dark">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
