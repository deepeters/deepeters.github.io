import React from 'react';

//Styles
import styled from "styled-components";
import { StyledAbout } from '../styles';

import Toggle from './Toggle';

import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from "./useScroll";


const QuestionsSection = () => {

    const [element, controls] = useScroll();

    return (
        <StyledQuestions>
            <h2> Any Questions? <span> FAQs </span> </h2>
            <AnimateSharedLayout> 
                <Toggle title = "What is Dennis's TechStack and Skillset?">              
                        <div className="answer">
                            <p> 
                                <ul>
                                    <li> Software immersive full stack development, implementation, testing and support in JavaScript,CSS,HTML, Java and Python with application skills in version control tools like Git, open-source software web application frameworks such as Spark, SpringBoot, Django, Flask, React JS and Angular JS and a collection of useful frontend libraries. </li>
                                    <li> Android Programming with Java & Kotlin programming languages. </li>
                                    <li> Database Management; an understanding in structured query language (SQL) including PostgreSQL and MySQL, knowledge of relational database management, object-oriented database management systems and NoSQL frameworks like Firebase. </li>
                                    <li> Implementation of software architectural styles for designing networked applications such as Representational State Transfer (REST) APIs. </li>
                                    <li> Information security comprising white coat ethical hacking, digital forensics, penetration testing, logs management, virtualisation, malware reverse engineering, scanning networks, vulnerability analysis, cloud computing and cryptography. </li>
                                    <li> Systems Administration with responsibilities to set up and monitor the operations and maintenance of computer systems. </li>
                                    <li> IT Support including product version updates, critical infrastructure updates, vendor clarification and support, compliance with IT regulations, outsourcing and troubleshooting computer systems and operations. </li>
                                    <li> Customer Technical Support. </li>
                                </ul>
                            </p>
                   
                        </div>
                </Toggle>
                <Toggle title="Which schools has Dennis attended?">            
                        <div className="answer">
                            <h4> 2021 - 2021 || <span> HarvardX (Harvard on edX) </span> || CS50's Web Programming with Python and Javascript </h4>
                            <h4> 2020 - 2021 || <span> Google Africa Developer Scholarship </span> || Android Developer Foundations & Kotlin App Fundamentals </h4>
                            <h4> 2020 - 2021 || <span>  Moringa School </span> || Software Immersive FullStack Development </h4>
                            <h4> 2019 - 2019 || <span>  Strathmore University </span> || Information Systems Security & Certified Ethical Hacking (CEHv10) </h4>
                            <h4> 2013 - 2018 || <span> Dedan Kimathi University of Technology </span> || Bachelor of Science (BSc.) Information Technology </h4>
                            <h4> 2012 - 2013 || <span> St. Joseph Computer College </span> || Diploma in Information Communication Technlogy </h4>
                           
                        </div>        
                </Toggle>
                <Toggle title = "Where has Dennis worked?"> 
                        <div className="answer">
                            <h4> 2021 – to date || <span>  Software Engineer </span> || UjuziTech Ltd. </h4>
                            <p>
                                <ul>
                                    <li> Software development in C#, Java, JavaScript, Microsoft C/AL and AL programming languages. </li>
                                    <li> Implementation of integration of various information systems such as core banking systems and Microsoft Dynamics versions including MS 365 and MS Business Central. </li>
                                    <li> Implementing hybrid cloud infrastructure on Azure Cloud. </li>
                                    <li> Tech lead on the development of new independent modules such as payroll and human resources. </li>
                                    <li> Application, design and utilisation of APIs such the Safaricom Mpesa B2C, B2B and C2B payment API as well as Bank EFT integrations. </li>
                                </ul>
                            </p>

                            <h4> 2019 - 2020 || <span>  Software Implementation & Support Engineer </span> || List Fintech Solutions Ltd. </h4>
                            <p>
                                <ul>
                                    <li> Managed Citius Core Banking, Agency Banking, Mobile Banking and Internet Banking system projects in different roles – implementation, testing, migration training etc. </li>
                                    <li> Oracle Database Management. </li>
                                    <li> Applied Citius systems on both Cloud Systems and In-premise data centre systems for List global clients. </li>
                                    <li> User Acceptance Testing and training & Citius Digital Banking Solutions development, maintenance and support. </li>
                                </ul>
                            </p>

                            <h4> 2018 || <span>  Software Engineer </span> || Realtime Technologies Ltd. </h4>
                            <p>
                                <ul>
                                    <li> Sybase Database Management. </li>
                                    <li> PowerBuilder Application Development. </li>
                                    <li> Customer Service. </li>
                                </ul>
                            </p>

                            <h4> 2016 ||  <span>  IT Support </span> || Kenya Power Company, </h4>
                            <p>
                                <ul>
                                    <li> Assisted in contracting of customers. </li>
                                    <li> Data gathering and processing. </li>
                                </ul>
                            </p>

                            <h4> 2016 || <span>  Management Intern </span> || National Hospital Insurance Fund, </h4>
                            <p>
                                <ul>
                                    <li> Capturing of claims, confirming of claims, claims examination and filling. </li>
                                    <li> Collaborated with organisation technician that, the computer cluster is functioning efficiently. </li>
                                    <li> Scanning, merging, and printing cards and photo card dispatch. </li>
                                    <li> Customer care procedures registration of new members. </li>
                                    <li> Accounting and audit procedures. </li>
                                </ul>
                            </p>
                        </div>
                </Toggle>
                
                <Toggle title = "Where does Dennis want to work?">               
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                        </div>
                    
                </Toggle>
            </AnimateSharedLayout>
        </StyledQuestions>
    )
}

const StyledQuestions = styled (StyledAbout)`
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