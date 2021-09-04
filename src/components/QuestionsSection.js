import React from 'react';

//Styles
import styled from "styled-components";
import { StyledAbout } from '../styles';

import Toggle from './Toggle';

import { AnimateSharedLayout } from 'framer-motion';

const QuestionsSection = () => {

    return (
        <StyledQuestions>
            <h2> Any Questions? <span> FAQs </span> </h2>
            <AnimateSharedLayout> 
                <Toggle title="Where did Dennis attend school?">            
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
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
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;


export default QuestionsSection;