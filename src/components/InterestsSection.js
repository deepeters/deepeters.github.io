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

//import { useScroll } from "./useScroll";
//import { scrollReveal } from "../animation";


const InterestsSection = () => {

    //const [element, controls] = useScroll();

    return (
        <StyledInterests 
            // variants = { scrollReveal } 
            // ref = { element } 
            // animate = { controls } 
            // initial = "hidden"
        >
            <StyledImage>
                <img src= {Interests} height = "600" alt="Interests Section" />
            </StyledImage>
            <StyledDescription>
                <h2>Proffessional <span> Interests </span> </h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src= {AI} height="100" alt="Artificial Intelligence" />
                            <h3>A.I.</h3>
                        </div>
                        <p>Artificial Intelligence</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {ML} height="100" alt="Machine Learning" />
                            <h3>M.L.</h3>
                        </div>
                        <p>Machine Learning</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {IS} height="100" alt="Information Security" />
                            <h3>I.S.</h3>
                        </div>
                        <p>Information Security</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {AL} height="100" alt="African Literature" />
                            <h3>A.L.</h3>
                        </div>
                        <p>African Literature</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            
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
    @media (max-width: 1000px){
        justify-content: center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    padding: 3rem;
    P {
        font-size: large;
        font-weight: 300;
        text-align: center;
    }
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