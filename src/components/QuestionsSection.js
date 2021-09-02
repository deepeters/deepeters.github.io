import React from 'react';

//Styles
import styled from "styled-components";
import { StyledAbout } from '../styles';

const QuestionsSection = () => {
    return (
        <StyledQuestions>
            <h2> Any Questions? <span> FAQs </span> </h2>
            <div className="question">
                <h4> Where did Dennis attend school?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> Where has Dennis worked?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> What frameworks is Dennis most familiar with?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> Where does Dennis want to work? </h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
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