import React from "react";

//Styles
import styled from "styled-components";
import { StyledAbout } from "../styles";

import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";
//import { useScroll } from "./useScroll";

const QuestionsSection = () => {
  //const [element, controls] = useScroll();

  return (
    <StyledQuestions
    // variants = { scrollReveal }
    // ref = { element }
    // animate = { controls }
    // initial = "hidden"
    >
      <h2>
        {" "}
        Any Questions? <span> FAQs </span>{" "}
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is Dennis's TechStack and Skillset?">
          <div className="answer">
            <p>
              <ul>
                <li>Software immersive full stack development, implementation, testing and support in: </li>
                <ul>
                  <li>
                    Java: Developing and Securing RESTful APIs and RESTful Web Services with JAX-RS, development of SOAP
                    Web Services with JAX-WS, application of the Spring Framework for Enterprise Java applications.,
                    bootstrapping Spring Applications with Spring Boot MVC, implementation of the Microservice
                    architecture with Spring Boot including communication and service discovery, fault tolerance,
                    resilience and configuration and unit testing with Junit 5.{" "}
                  </li>
                  <li>
                    C#: Web development using the .NET (ASP.NET & ASP.NET Core) MVC framework including deconstruction
                    of regular monolith web applications to micro services and migration to Episerver Content Management
                    Systems (CMS) 11 & 12
                  </li>
                  <li>JavaScript: Client side application development with React JS and Angular JS.</li>
                  <li>Python: End to end application development with Flask and Django.</li>
                </ul>
                <li>
                  {" "}
                  Database Management; an understanding in structured query language (SQL) including PostgreSQL, Oracle
                  and MySQL, knowledge of relational database management, object-oriented database management systems
                  and NoSQL frameworks like Firebase.{" "}
                </li>
                <li>
                  {" "}
                  Information security comprising user authentication, cryptography, white coat ethical hacking, digital
                  forensics, penetration testing, logs management, virtualisation, malware reverse engineering, scanning
                  networks and vulnerability analysis{" "}
                </li>
                <li> Familiarity with the Agile Scrum Methodology in Software development and delivery. </li>
                <li> Version Control Tools, i.e. Git </li>
              </ul>
            </p>
          </div>
        </Toggle>
        <Toggle title="Which schools has Dennis attended?">
          <div className="answer">
            <h4>
              {" "}
              2020 - 2021 || <span> Moringa School </span> || Software Immersive FullStack Development{" "}
            </h4>
            <h4>
              {" "}
              2019 - 2019 || <span> Strathmore University </span> || Information Systems Security & Certified Ethical
              Hacking (CEHv10){" "}
            </h4>
            <h4>
              {" "}
              2013 - 2018 || <span> Dedan Kimathi University of Technology </span> || Bachelor of Science (BSc.)
              Information Technology{" "}
            </h4>
          </div>
        </Toggle>
        <Toggle title="Where has Dennis worked?">
          <div className="answer">
            <h4>
              {" "}
              2021 – to date || <span> Software Engineer </span> || Kenya Airways PLC{" "}
            </h4>
            <p>
              <ul>
                <li>Software development for web applications in C#, Java and JavaScript programming languages.</li>
                <li>Deconstructing large .NET monolith applications to micro services.</li>
                <li>
                  Implementing hybrid cloud infrastructure on Azure Cloud in particular migration of complex
                  infrastructure to Episerver CMS.
                </li>
                <li>Automation of deployment processes by building CI/CD pipelines.</li>
                <li>
                  Application, design and utilisation of third party APIs such the Safaricom Mpesa B2C, B2B and C2B
                  payment API as well as other direct payment option integrations.
                </li>
              </ul>
            </p>

            <h4>
              {" "}
              2019 - 2020 || <span> Software Implementation & Support Engineer </span> || List Fintech Solutions Ltd.{" "}
            </h4>
            <p>
              <ul>
                <li>
                  {" "}
                  Managed Citius Core Banking, Agency Banking, Mobile Banking and Internet Banking system applications
                  in different roles – implementation, testing, migration training etc.{" "}
                </li>
                <li> Oracle Database Management. </li>
                <li>
                  {" "}
                  Applied Citius systems on both Cloud Systems and In-premise data centre systems for List global
                  clients.{" "}
                </li>
                <li>
                  {" "}
                  User Acceptance Testing and training & Citius Digital Banking Solutions development, maintenance and
                  support.{" "}
                </li>
              </ul>
            </p>

            <h4>
              {" "}
              2018 || <span> Software Engineer </span> || Realtime Technologies Ltd.{" "}
            </h4>
            <p>
              <ul>
                <li> Sybase Database Management. </li>
                <li> PowerBuilder Application Development. </li>
                <li> Customer Service. </li>
              </ul>
            </p>

            <h4>
              {" "}
              2016 || <span> IT Support </span> || Kenya Power Company,{" "}
            </h4>
            <p>
              <ul>
                <li> Assisted in contracting of customers. </li>
                <li> Data gathering and processing. </li>
              </ul>
            </p>

            <h4>
              {" "}
              2016 || <span> Management Intern </span> || National Hospital Insurance Fund,{" "}
            </h4>
            <p>
              <ul>
                <li> Capturing of claims, confirming of claims, claims examination and filling. </li>
                <li>
                  {" "}
                  Collaborated with organisation technician that, the computer cluster is functioning efficiently.{" "}
                </li>
                <li> Scanning, merging, and printing cards and photo card dispatch. </li>
                <li> Customer care procedures registration of new members. </li>
                <li> Accounting and audit procedures. </li>
              </ul>
            </p>
          </div>
        </Toggle>

        <Toggle title="Where does Dennis want to work?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledQuestions>
  );
};

const StyledQuestions = styled(StyledAbout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem 2rem 10rem;
        display: block;
        h4 {
            font-weight: lighter;
            padding-bottom: 0rem;
            span {
                display: inline-block;
                font-weight: lighter;
            }
        p {
            padding: 0rem 0rem;
        }
        ul {
            padding: 2rem;
            li {
            font-size: 1.5rem;
        }
        

        }
    }
`;

export default QuestionsSection;
