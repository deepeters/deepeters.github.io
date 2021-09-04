import React from "react";

//import Icons
import AI from "../images/AI.png";
import ML from "../images/machine-learning.png";
import IS from "../images/security.png";
import AL from "../images/african-woman.png";

//import images
import Interests from "../images/interests.jpg"

//Styled Components
import styled from 'styled-components';

//Styles
import {StyledAbout, StyledDescription, StyledImage } from "../styles";

import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";


const InterestsSection = () => {

    const [element, controls] = useScroll();

    return (
        <StyledInterests variants = { scrollReveal } ref = { element } animate = { controls } initial = "hidden">
            <StyledDescription>
                <h2>Proffessional <span> Interests </span> </h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src= {AI} height="100" alt="Artificial Intelligence" />
                            <h3>Artificial Intelligence</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {ML} height="100" alt="Machine Learning" />
                            <h3>Machine Learning</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {IS} height="100" alt="Information Security" />
                            <h3>Information Security</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {AL} height="100" alt="African Literature" />
                            <h3>African Literature</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src= {Interests} height = "600" alt="Interests Section" />
            </StyledImage>
        </StyledInterests>
    )
}

const StyledInterests = styled(StyledAbout) `
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default InterestsSection;