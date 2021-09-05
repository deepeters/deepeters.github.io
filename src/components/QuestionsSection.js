import React from 'react';

//Styles
import styled from "styled-components";
import { StyledAbout } from '../styles';

import Toggle from './Toggle';

import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const QuestionsSection = () => {

    const [element, controls] = useScroll();

    return (
        <StyledQuestions variants = { scrollReveal } ref = { element } animate = { controls } initial = "hidden">
            <h2> Any Questions? <span> FAQs </span> </h2>
            <AnimateSharedLayout> 
                <Toggle title="Which schools has Dennis attended?">            
                        <div className="answer">
                            <h4> 2021 - 2021 : <span> HarvardX (Harvard on edX) </span> </h4>
                            <p>CS50's Web Programming with Python and Javascript</p>

                            <h4> 2020 - 2021 : <span> Google Africa Developer Scholarship </span> </h4>
                            <p>Android Developer Foundations & Kotlin App Fundamentals</p>

                            <h4> 2020 - 2021 : <span>  Moringa School </span> </h4>
                            <p>Software Immersive FullStack Development</p>

                            <h4> 2013 - 2018 : <span> Dedan Kimathi University of Technology </span> </h4>
                            <p>Bachelor of Science (BSc.) Information Technology</p>
                        </div>        
                </Toggle>
                <Toggle title = "Where has Dennis worked?"> 
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                        </div>
                </Toggle>
                <Toggle title = "What is Dennis's TechStack?">              
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
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
    }
`;


export default QuestionsSection;