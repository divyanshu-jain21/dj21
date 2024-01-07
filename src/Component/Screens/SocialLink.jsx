import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import './SocialLink.css'; // Import your CSS file for styling

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="ms-3"/>
        </>
      ),
      href: "www.linkedin.com/in/vinitika-infotech-665a932a8",
    },
    // {
    //   id: 2,
    //   child: (
    //     <>
    //       GitHub <FaGithub size={30} className="ms-3" />
    //     </>
    //   ),
    //   href: "",
    // },
    {
      id: 3,
      child: (
        <>
          Mail <FaEnvelope size={30}className="ms-3" />
        </>
      ),
      href: "mailto:infotechvnit@gmail.com",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Instagram <FaInstagramSquare size={30} className="ms-3"/>
    //     </>
    //   ),
    //   href: "",
    // },
    // {
    //   id: 5,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} className="ms-3" />
    //     </>
    //   ),
    //   href: "",
    //   download: true,
    // },
  ];

  return (
    <>
    <div className="social-links-containers">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id} className="social-links">
            <a
              href={href}
              className="link-contents"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
   
    </>
  );
};

export default SocialLink;
