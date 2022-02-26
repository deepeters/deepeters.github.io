import React from "react";
import about from "../images/about.jpg";

import { Link } from "react-router-dom";

//Styled Components
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnim}>Hello, I am Dennis</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              a <span> Software Engineer </span> &
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>an African literature enthuthiast</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          <p>
            Working in Nairobi City, Kenya, I have around three to four years in software development and contributed to
            more than thirty open-source application projects to the online community.
            <br />
            <br />
            As a software engineer, I have worked developed, tested, deployed, and maintained solutions ranging from
            banking, aviation, inventory, payroll, and human resource information management systems among others. I
            have developed and secured RESTful APIs and Web Services to share intricate resources between application
            software. Applied the microservice architecture using Spring Boot & ASP.NET and enabled communication,
            service discovery, fault tolerance, resilience and optimisation. Secured all the components of software on
            both the application and the network layer and engaged in intensive testing on different levels including
            unit, functional and integration tests.
            <br />
            <br />
            As an innovator and solution finder, I have attempted to develop a solution that combines my discreet
            passion for creative arts, in particular, African literature with technological tools and techniques.
          </p>
        </motion.p>
        <motion.button variants={fade}>
          {" "}
          <Link to="/projects">View Projects</Link>
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={about} alt="Dennis is a portrait" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
